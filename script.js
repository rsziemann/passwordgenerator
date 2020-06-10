// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var person = prompt("Please enter your name", "");

  // if (person == null || person == "") {
  //   txt = "user cancelled the prompt.";
  // } else {
  //   txt = "Hello" + person + "! Do you need a password";
  //   alert("hello and wellcome to Password Generator");
  // }
  var length = prompt("what is the length of your password");
  console.log(length);
  if (length < 8 || length > 128) {
    length = prompt("you entered an invalid password length try again ");
  }

  if (length >= 8 && length <= 128)
    length = prompt("you entered a valid password length, yay");

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

//prompt
/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
The following image demonstrates the application functionality: */

//DOM elements
const resultEL = document.querySelector("#result");
const lengthEL = document.querySelector("#length");
const uppercaseEL = document.querySelector("#uppercase");
const lowercaseEL = document.querySelector("#lowercase");
const numberEL = document.querySelector("#number");
const symbolsEL = document.querySelector("#symbols");
const generateEL = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*const length = +lengthEl.value;
const hasLower = lowercaseEl;
const hasUpper = uppercaseEl;
const hasNumber = numberEl;
const hasSymbol = symbolEl;*/

//Generator Functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode[Math.floor(Math.random() * 26) + 97];
}

function getRandomUpper() {
  return String.fromCharCode[Math.floor(Math.random() * 26) + 65];
}

function getRandomNumber() {
  return String.fromCharCode[Math.floor(Math.random() * 10) + 48];
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]+?,.";
  return symbols[Math.floor(Math.random() * symbols.lenght)];
}
