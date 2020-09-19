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


  var confirmLength = prompt("How many characters would you like your password to contain? (Must choose a number between 8 - 128.");
    console.log(confirmLength)
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Password must be between 8 - 128");
      return false;

    }
    else {
      var confirmLowercase =  confirm("Click OK if you would like lowercase letters.");
      console.log(confirmLowercase);
      var confirmUppercase = confirm("Click OK if you would like uppercase letters");
      console.log(confirmUppercase);
      var confirmNumber =  confirm("Click OK if you would like numeric charicters.");
      console.log(confirmNumber);
      var confirmCharacter = confirm("Click OK if you would like special charicters.");
      console.log(confirmCharacter)
    }
    
    while (confirmLowercase != true && confirmUppercase != true && confirmNumber != true && confirmCharacter != true) {
      alert("You must select at least one character type.");
      return false;
      
    }
}



// function generatePassword() {
  // var userInput = userInput();
// console.log(userInput);
// }



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
