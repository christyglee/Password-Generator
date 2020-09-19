// Arrays for password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "<", ">", "[", "]", "{", "}"];


// Prompt set-up
function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to contain? (Must choose a number between 8 - 128.");{
    console.log(confirmLength)
    if (confirmLength < 8 || confirmLength > 128) {
      alert("Password must be between 8 - 128");
      return false;

    }
    else if (confirmLength >= 8 || confirmLength <= 128) {
      var confirmLowercase =  confirm("Click OK if you would like lowercase letters.");
      console.log(confirmLowercase);
      var confirmUppercase = confirm("Click OK if you would like uppercase letters");
      console.log(confirmUppercase);
      var confirmNumber =  confirm("Click OK if you would like numeric charicters.");
      console.log(confirmNumber);
      var confirmCharacter = confirm("Click OK if you would like special charicters.");
      console.log(confirmCharacter)
    }
    else if (confirmLowercase != true && confirmUppercase != true && confirmNumber != true && confirmCharacter != true) {
      alert("You must select at least one character type.");
      return false;
    }
  }
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
