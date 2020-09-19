// Arrays for password using string
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var characters = "!@#$%^&*()-+?<>[]{}";


// Prompt set-up
function generatePassword() {

  // Created values to clear old generated password
  var userInput = "";
  var newPassword = "";
  var i = 0;

  // Set prompts and if statements
  var confirmLength = prompt("How many characters would you like your password to contain? (Must choose a number between 8 - 128.");
    console.log(confirmLength)
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Password must be between 8 - 128");
      return;
    }

    var confirmLowercase =  confirm("Click OK if you would like lowercase letters.");
    if (confirmLowercase) {
      unserInput += lowercase;
      console.log(userInput);
    }
  
    var confirmUppercase = confirm("Click OK if you would like uppercase letters");
    if (confirmUppercase) {
      unserInput += uppercase;
      console.log(userInput);
    }

    var confirmNumber =  confirm("Click OK if you would like numeric charicters.");
    if (confirmNumber) {
      console.log(userInput);
    }

    var confirmCharacter = confirm("Click OK if you would like special charicters.");
    if (confirmCharacter) {
      console.log(userInput);
    }
 
    if (confirmLowercase != true && confirmUppercase != true && confirmNumber != true && confirmCharacter != true) {
      alert("You must select at least one character type.");
      return false;
    }
    return newPassword;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
