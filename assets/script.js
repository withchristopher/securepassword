// Assignment code here

function generatePassword() {
  numChar = parseInt(
    prompt(
      "Welcome. You will now be asked a series of prompts. Please enter the length between 8 and 128 characters"
    )
  );

  if (isNaN(numChar) || numChar < 8 || numChar > 128) {
    numChar = parseInt;
    prompt("Oops! Please enter a password between 8 and 128 characters");
  } else {
    lowCase = confirm("Would you like lower case in your password?");
    uppCase = confirm("Would you like upper case in your password?");
    numCase = confirm("Would you like numbers in your password?");
    uppCase = confirm("Would you like special case in your password?");
  }
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
