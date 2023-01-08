
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

// Function for getting a random element from an array
function getRandom(passChars, passNumber) {
var password = "";
  for (i = 0; i < passNumber; i++){
   password += passChars[Math.floor(Math.random() * passChars.length)]
 };
 // console.log(password);
 return password;
  };

// Function to generate password with user input
let generatePassword = function () {

  var password = "";
  var passCharacter = "";

// list of chosen characters
var passChars = [];

// Get the initial input of the user
var passNum = prompt("Please select the length of your new password (between 10 and 64 characters long)");

// // convert input to number
passNum = parseInt(passNum);

// Input validation
if (passNum < 10) {
  alert ("Password should be longer than 10 characters!");
  return "";
};

// checking if the user input is a number
// console.log(typeof passNum);

if (passNum > 64) {
  alert ("Password should have no more than 64 characters");
  return "";
};

var specialCharactersChoice = confirm("Click OK to confirm including special characters");

if (specialCharactersChoice){
  passCharacter += specialCharactersChoice;
  passChars.push(...specialCharacters);
}

var numericCharactersChoice = confirm("Click OK to confirm including numeric characters");

if (numericCharactersChoice) {
  passCharacter += numericCharactersChoice;
  passChars.push(...numericCharacters);
};

var lowerCasedCharactersChoice = confirm("Click OK to confirm including lower cased characters");

if(lowerCasedCharactersChoice) {
  passCharacter += lowerCasedCharactersChoice;
  passChars.push(...lowerCasedCharacters);
};

var upperCasedCharactersChoice = confirm("Click OK to confirm including upper cased characters");

if(upperCasedCharactersChoice) {
  passCharacter += upperCasedCharactersChoice;
  passChars.push(...upperCasedCharacters);
   // checking if I am adding the array specialCharacters successfully to the passChars array
  // console.log(passChars);
}; 

if (!passCharacter) {
  window.alert("You need to select at least one character type, please try again");
};

  return getRandom(passChars, passNum);

};

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