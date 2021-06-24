// Assignment Code

//Object contains all methods for
let characterGenerator = {
  specialchar: `"'!@#$%^&*()_-+=~[{|:;<,>.?\/}]`,
  lowercase: function(){
    let ascii = Math.floor(Math.random * 26);
    return String.fromCharCode(97 + ascii);
  },
  uppercase: function(){
    let ascii = Math.floor(Math.random * 26);
    return String.fromCharCode(65 + ascii);
  },
  number: function(){
    return Math.floor(Math.random * 10);;
  },
  special: function(){
    let randIdx = Math.floor(Math.random * this.specialchar.length)
    return this.specialchar.charAt();
  }
};

var generateBtn = document.querySelector("#generate");

// Handles the process for generating a password
function generatePassword(){
  let charTypes = [];
  // Ask for a password length
    // Password length needs to be between 8 and 128 characters 
    let passLen = prompt('How long do you want your password to be?');
  // Ask if the user wants lowercase characters
    let useLower = confirm('Do you want to use lowercase letters?');
    if (useLower){
      charTypes.push('l');
    }
    // Ask if the user wants UPPERCASE characters
    let useUpper =  confirm('Do you want to use uppercase letters?');
    if (useUpper){
      charTypes.push('u');
    }
    // Ask if the user wants Numbers characters
    let useNumbers = confirm('Do you want to use numbers?');
    if (useNumbers){
      charTypes.push('n');
    }
    // Ask if the user wants Special characters
    let useSpecial = confirm('Do you want to use special characters?');
    if (useSpecial){
      charTypes.push('s');
    }
    // User must select atleast 1 character type
  // Generate the password based on the following criteria
    // loop from 0 to passLen - 1
      // on each iteration
      // A character type needs to be selected at random
      // A sub character needs to be selected from that type group
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
