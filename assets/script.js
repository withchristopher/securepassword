// Assignment code here

// all available characters
const key_strings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "*;<>()[]{}#$?!^|",
};

// function to generate password, no arguments to pass
function generatePassword() {
  // first prompt to ask user to enter length between 8 and 128
  numChar = parseInt(
    prompt(
      "Welcome. You will now be asked a series of prompts. Please enter the length between 8 and 128 characters"
    )
  );

  // conditional for Not a Number, <8 and >128 characters
  if (isNaN(numChar) || numChar < 8 || numChar > 128) {
    numChar = parseInt;
    prompt("Oops! Please enter a password between 8 and 128 characters");
  } else {
    lowCase = confirm("Would you like lower case in your password?");
    uppCase = confirm("Would you like upper case in your password?");
    numCase = confirm("Would you like numbers in your password?");
    uppCase = confirm("Would you like special case in your password?");
  }

  // randrom number generator
  var passwordString = Math.random().toString(36).slice(-8);

  console.log(passwordString);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
