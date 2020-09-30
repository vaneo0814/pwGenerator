// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //document.querySelector returns the first element within the document that matches the specified selector.
    
    passwordText.value = password;

}
//validating length
let passwordOption = askPasswordLength();
function askPasswordLength() {
    var length = parseInt(
        prompt("Hello, how long would you like your password to be? (8-128)")
    );
    if (isNaN(length) === true) {
        alert("Password needs an input for desired length. Try again.");
        askPasswordLength();
        return false;
    }
    else if ((length < 8) || (length > 128)) {
        alert("Password length must be between 8-128");
        askPasswordLength();
        return false;
    }
    else {
        alert("Next, please choose your desired password options..");
        return true;
    }
}

//CODE WORKS//
//Using ascii code 
//creating functions that will generate random letters, uppercased and lowercased using ascii chart

//uppercase letters // confirm if clicked yes or no to input into password.
function upperCaseLetters() {
    if (upper == true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    else {
        return false;
    }
}
var upper = confirm("Would you like an uppercase included in your password?");
console.log(upperCaseLetters());

//lowercase letters
function lowerCaseLetters() {
    if (lower == true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    else {
        return false;
    }
}
var lower = confirm("Would you like a lowercase included in your password?");
console.log(lowerCaseLetters());

//numerical values
function numericalValues() {
    if (numbers == true) {
        return (Math.floor(Math.random() * 9) + 1);
    }
    else {
        return false;
    }
}
var numbers = confirm("Would you like a number included in your password?");
console.log(numericalValues());

//special characters
function randomSpecialCharacters() {
    var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "/", "<", ">", "?"];
    if (characters == true) {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    else {
        return false;
    }
}
var characters = confirm("Would you like a special character included in your password?");
console.log(randomSpecialCharacters());








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///still need to..
//when confirmed whichever option, then ADD to pw and when not confirmed NOT input to pw.
///when valid, password will display in box.

///valide the user selected at least one character type.
///and then when invalid, terminate password and start all over.
