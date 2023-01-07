// Should configure exit condition to say that the user should at least a select a character type. We should configure 4 prompts for every Character type

//

// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
 // Prompt: How long would you like your password to be (10 - 64)
  // Validation: We need to make sure the number is numerical is it is within the 10 and 64 digits

// * Length of password
//   * At least 10 characters but no more than 64.

// Get the initial input of the client

// var passNum = (prompt("Please select the lenght of your new password (between 10 and 64 characters long)"));

// // convert input to number

// let passNumber = parseInt(passNum);

// // Next step is to validate if input meets all requirements

// if (!Number.isNaN(passNumber) && passNumber < 10 && passNumber > 64) {
//   console.log("Thanks");  
// } else {
//   prompt ("Please choose another password lenght between 10 and 64 characters");
// };




// * Character types


//   * Lowercase

// Next confirm.prompt will be to ask the user whether they need Lowercase
// If yes, we need to include the Lower cases

//   * Uppercase

// Next confirm.prompt will be to ask the user whether they need Upper cases
// If yes, we need to include the Upper cases

//   * Numeric

// Next confirm.prompt will be to ask the user whether they need Numberic
// If yes, we need to include the Numeric cases

//   * Special characters ($@%&*, etc)

// Next confirm.prompt will be to ask the user whether they need Special character
// If yes, we need to include the Special character

// minimum requirements to have is 1 character type and minimum lenght of password

// * Code should validate for each input and at least one character type should be selected

// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {
  

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  var password = "";
  var passCharacter = "";

    // Get the initial input of the client

var passNum = prompt("Please select the lenght of your new password (between 10 and 64 characters long)");

// // convert input to number
passNum = parseInt(passNum);

if (passNum < 10) {
  alert ("Password should be longer than 10 characters!");
  return "";
};

if (passNum > 64) {
  alert ("Password should have no more than 64 characters");
  return "";
};

var specialCharactersChoice = confirm("Click OK to confirm including special characters");

if (specialCharactersChoice){
  passCharacter += specialCharactersChoice;
}

var numericCharactersChoice = confirm("Click OK to confirm including numeric characters");

if (numericCharactersChoice) {
  passCharacter += numericCharactersChoice;
};

var lowerCasedCharactersChoice = confirm("Click OK to confirm including lower cased characters");

if(lowerCasedCharactersChoice) {
  passCharacter += lowerCasedCharactersChoice;
};














  return "Random pass test";

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password; // this sends the value of the password to the browser
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);