// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function swapCharacters(){
  //Identify which categories have 0 length
  //replace character types with another category of zero length
  let missTypes = [];
  let typesToReplace = [];
  for(const type in passwordBuilder.criteria){
    if(passwordBuilder[type].length <= 0){
      missTypes.push(type);
    } else if (passwordBuilder[type].length > 1){
      typesToReplace.push(type);
    }
  }

  while(missTypes.length > 0){
    //Get first missing type
    let currType = missTypes.pop();
    //Select a random type
    let randType = Math.floor(Math.random() * typesToReplace.length);
    //Get a random index from that type
    //replace it with a random character
    //remove randType from character list if it's length is less than 2
  }

}

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

function constructPassword(numChar) {
  // let pass = "";
  // console.log(typeArray);
  // TODO: Add logic to ensure all character types are added
  for (let index = 0; index < numChar; index++) {
    let typeArray = passwordBuilder.criteria;
    let randType = Math.floor(Math.random() * typeArray.length);
    passwordBuilder.password += getCharacter(typeArray[randType]);
    passwordBuilder[typeArray[randType]].push(index);
  }

  //Check if criteria is met
  if(checkCriteriaMet() == false){
    //Adjust password
  }
  console.log(passwordBuilder);
  return passwordBuilder.password;
}

// Handles the process for generating a password
function generatePassword() {
  let charTypes = [];
  let lenthInRange = false;
  let minCharTypes = 0;
  let passLen = 0;
  let useLower = false;
  let useUpper = false;
  let useNumbers = false;
  let useSpecial = false;
  // Password must be an integer
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

    if (charTypes.length >= 1) {
      passwordBuilder.criteria = charTypes;
      minCharTypes = charTypes.length;
    } else {
      alert(
        "Did not select any character types. Please select atleast one character type"
      );
    }
  }
  // Generate the password based on the following criteria
  return constructPassword(passLen);
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
