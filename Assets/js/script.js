// Assignment Code
var generateBtn = document.querySelector("#generate");

// Helper object for building the password.
// Monitors the password criteria and which types have been added
let passwordBuilder = {
  password: "",
  length: 0,
  criteria: [],
  l: [], //Tracks indexes of lowercase character
  u: [], //Tracks indexes of character type
  n: [], //Tracks indexes of character type
  s: [], //Tracks indexes of character type
  resetBuilder: function(){
    this.password = "";
    this.length = 0;
    this.criteria = [];
    this.l = [];
    this.u = [];
    this.n = [];
    this.s = [];
  }
};

//Object contains all methods for
let characterGenerator = {
  specialchar: `"'!@#$%^&*()_-+=~[{|:;<,>.?\/}]`,
  lowercase: function () {
    let ascii = Math.floor(Math.random() * 26);
    return String.fromCharCode(97 + ascii);
  },
  uppercase: function () {
    let ascii = Math.floor(Math.random() * 26);
    return String.fromCharCode(65 + ascii);
  },
  number: function () {
    return Math.floor(Math.random() * 10);
  },
  special: function () {
    let randIdx = Math.floor(Math.random() * this.specialchar.length);
    return this.specialchar.charAt(randIdx);
  },
};

// Replaces characters in the password with character types that are missing
function swapCharacters(){
  //Identify which character types from the criteria have 0 indexes associated with them
  //replace character types with another category of zero length
  let missTypes = [];
  let typesToReplace = [];
  let newPass = passwordBuilder.password;
  for(const type of passwordBuilder.criteria){
    if(passwordBuilder[type].length <= 0){
      missTypes.push(type);
    } else if (passwordBuilder[type].length > 1){
      typesToReplace.push(type);
    }
  }

  // For each missing character type, identify a character that can be replaced, 
  // then generate a character to fill that spot
  while(missTypes.length > 0){
    //Get first missing type
    let currType = missTypes.pop();

    //Select a random type
    let randType = Math.floor(Math.random() * typesToReplace.length);

    //Get character index list
    let charIdxList = passwordBuilder[typesToReplace[randType]];

    //Get a random index from the array of indexes of that character type
    let idxFromIndexList = Math.floor(Math.random() * charIdxList.length);

    //Grab a random index from the list
    let randIdx = charIdxList[idxFromIndexList];
    let newChar = getCharacter(currType);

    //replace it with a random character
    newPass = newPass.replace(newPass[randIdx],newChar);
    passwordBuilder[currType].push(randIdx);
    charIdxList.splice(idxFromIndexList,1);

    //remove randType from character list if it's length is less than 2
    if(charIdxList.length < 2){
      typesToReplace.splice(randType,1);
    }
  }
  passwordBuilder.password = newPass;
}

// Returns true if all character types from the criteria are in the password
function checkCriteriaMet(){
  let metCriteria = true;
  for(const type of passwordBuilder.criteria){
    if(passwordBuilder[type].length <= 0){
      metCriteria = false;
      break;
    }
  }
  return metCriteria;
}

// Returns a random character when the character type is requested
function getCharacter(charType){
    switch (charType) {
      case "l":
        return characterGenerator.lowercase();
      case "u":
        return characterGenerator.uppercase();
      case "n":
        return characterGenerator.number();
      case "s":
        return characterGenerator.special();
      default:
        return characterGenerator.lowercase();
    }
}

// Constructs the password one character at a time
function constructPassword() {
  for (let index = 0; index < passwordBuilder.length; index++) {
    let typeArray = passwordBuilder.criteria;
    let randType = Math.floor(Math.random() * typeArray.length);
    passwordBuilder.password += getCharacter(typeArray[randType]);
    passwordBuilder[typeArray[randType]].push(index);
  }

  //Check if criteria is met
  if(checkCriteriaMet() == false){
    swapCharacters();
  }
  return passwordBuilder.password;
}

// Handles the alerts for gathering password criteria
function generatePassword() {
  let charTypes = [];
  let lenthInRange = false;
  let minCharTypes = 0;
  let passLen = 0;
  let useLower = false;
  let useUpper = false;
  let useNumbers = false;
  let useSpecial = false;

  // Password must length must be in the range of 8 to 128
  while (!lenthInRange) {
    passLen = prompt("How long do you want your password to be?");
    if (passLen >= 8 && passLen <= 128) {
      passwordBuilder.length = passLen;
      lenthInRange = true;
    } else {
      alert(
        "Character length is invalid. Please enter a number between 8 and 128"
      );
    }
  }

  // User must select atleast 1 character type
  while (minCharTypes < 1) {
    // Ask if the user wants lowercase characters
    useLower = confirm("Do you want to use lowercase letters?");
    if (useLower) {
      charTypes.push("l");
    }
    // Ask if the user wants UPPERCASE characters
    useUpper = confirm("Do you want to use uppercase letters?");
    if (useUpper) {
      charTypes.push("u");
    }
    // Ask if the user wants Numbers characters
    useNumbers = confirm("Do you want to use numbers?");
    if (useNumbers) {
      charTypes.push("n");
    }
    // Ask if the user wants Special characters
    useSpecial = confirm("Do you want to use special characters?");
    if (useSpecial) {
      charTypes.push("s");
    }

    // Handles the case when the user doesn't select any character types
    if (charTypes.length >= 1) {
      passwordBuilder.criteria = charTypes;
      minCharTypes = charTypes.length;
    } else {
      alert(
        "Did not select any character types. Please select atleast one character type"
      );
    }
  }

  // Generate the password based on the following criteria, then return it
  return constructPassword();
}
// Write password to the #password input
function writePassword() {
  passwordBuilder.resetBuilder();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);