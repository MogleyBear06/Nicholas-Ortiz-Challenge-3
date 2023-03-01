//  Create variable that points to specific element in HTML
const generateBtn = document.querySelector("#generate");

//  Create variables that will be used to generate password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Event listn.- this is tiggered when user selects 'generate password'
generateBtn.addEventListener("click", function () {

let passwordLength = parseInt(prompt("Enter password length- must be between 8 and 128 characters:"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
passwordLength = parseInt(prompt("Enter password length- must between 8 and 128 characters:"));
}
}
