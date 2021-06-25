# uwbootcamp_passwordgenerator
The goal os this project is to build a dynamic password generator. It should be able to output passwords of different lengths and a mix of numbers, special characters, upper case letters and lowercase letters. The full assignment is defined [here](./assets/AssignmentDetails.md)

## Resources
- [Arrays - Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [How to replace a character inside a string in Javascript](https://www.tutorialrepublic.com/faq/how-to-replace-character-inside-a-string-in-javascript.php)
- [ASCII Table](https://www.asciitable.com/)
- [Javascript int to char and char to int conversion](https://jaspreetchahal.org/javascript-int-to-char-and-char-to-int-conversion/)

## Completed Application
### [Password Generator](https://delizoderek.github.io/uwbootcamp_passwordgenerator/)
![Work Sample](./assets/media/PasswordGenerator_Walkthrough.gif)

## Function Breakdown
### swapCharacters
The swap character function first identifies which character types are missing and which types could be replaced without erasing its presence from the password. After building an array of missing types and types that can be replaced the function begins generating random indexes to select the character to replace.
### checkCriteriaMet
This function checks the length of each index array based on the criteria and returns false if any have a length less than zero.
### getCharacter
The getCharacter function returns a random character based on the requested type.
### constructPassword
Loops until enough characters have been added to match the length criteria
### generatePassword
Handles the popups required to define the criteria for generating the password

## Breakdown of Objects
### passwordBuilder
- password - Used to hold the password being generated
- length - Number of characters in the password
- criteria - The criteria that needs to be met when the password is generated
- l - Array that stores the indexes from the password string for lowercase characters
- u - Array that stores the indexes from the password string for uppercase characters
- n - Array that stores the indexes from the password string for number character types
- s - Array that stores the indexes from the password string for special characters

### characterGenerator
- Lowercse - Gets a random number between 0 and 25, then adds it to a base value of 'a' and returns the ascii character
- Uppercase - Gets a random number between 0 and 25, then adds it to a base value of 'A' and returns the ascii character
- Number - Picks a random number between 0 and 9
- Special Characters - picks a random index from 0 to the length of the special character string
