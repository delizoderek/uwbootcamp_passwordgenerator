// Assignment Code
var generateBtn = document.querySelector("#generate");

// Handles the process for generating a password
function generatePassword(){
  // TODO: Ask for a password length
    // Password length needs to be between 8 and 128 characters 
    let passLen = prompt('How long do you want your password to be?');
  // TODO: Ask if the user wants lowercase characters
    let useLower = prompt('Do you want to use lowercase letters?');
  // TODO: Ask if the user wants UPPERCASE characters
    let useUpper =  prompt('Do you want to use uppercase letters?');
  // TODO: Ask if the user wants Numbers characters
    let useNumbers = prompt('Do you want to use numbers?');
  // TODO: Ask if the user wants Special characters
    let useSpecial = prompt('Do you want to use special characters?');
    // User must select atleast 1 character type
  // TODO: Generate the password based on the following criteria
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
