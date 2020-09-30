//Assignment Code
var upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numbers = '0123456789'.split('');
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "/", "<", ">", "?"];

console.log(upper);
console.log(lower);
console.log(numbers);
console.log(symbols);

var generateBtn = document.querySelector("#generate");

function writePassword() {


    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password
}

generateBtn.addEventListener("click", writePassword);




//MY CODE
function getPasswordOptions() {
    var length = parseInt(
        prompt("Hello, how long would you like your password to be? (8-128)")
    );
    if (isNaN(length) === true) {
        alert("Password needs an input for desired length. Try again.");
        getPasswordOptions();
        return;
    }
    if ((length < 8) || (length > 128)) {
        alert("Password length must be between 8-128");
        getPasswordOptions();
        return;
    }
    var upperConfirm = confirm("Would you like an uppercase included in your password?");
    var lowerConfirm = confirm("Would you like a lowercase included in your password?");
    var numbersConfirm = confirm("Would you like a number included in your password?");
    var symbolsConfirm = confirm("Would you like a special character included in your password?");
    if (upperConfirm === false && !lowerConfirm && !numbersConfirm && !symbolsConfirm) {
        alert("You must select at least one character.");
        return;
    }
    var passwordOption = {
        length: length,
        upperConfirm: upperConfirm,
        lowerConfirm: lowerConfirm,
        numbersConfirm: numbersConfirm,
        symbolsConfirm: symbolsConfirm,
    }
    return passwordOption;
}

function generatePassword() {
    var options = getPasswordOptions();
    var generatePassword = [];
    var potentialPassword = [];
    if (options.upperConfirm) {
        potentialPassword = potentialPassword.concat(upper)
    }
    if (options.lowerConfirm) {
        potentialPassword = potentialPassword.concat(lower)
    }
    if (options.numbersConfirm) {
        potentialPassword = potentialPassword.concat(numbers)
    }
    if (options.symbolsConfirm) {
        potentialPassword = potentialPassword.concat(symbols)
    }
    console.log(potentialPassword);
    for (var i = 0; i < length; i++) {
        generatePassword += getRandomEl(potentialPassword);
    }
    console.log(generatePassword);
}









function getRandomEl(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var randEl = arr[index];
    return randEl;
}



/*form.addEventListener('submit', e => {
    var generatePassword = generatePassword(upper, lower, numbers, symbols)
    var upperConfirm = upperConfirm.confirm
    var lowerConfirm = lowerConfirm.confirm
    var numbersConfirm = numbersConfirm.confirm
    var symbolsConfirm = symbolsConfirm.confirm

})*/


