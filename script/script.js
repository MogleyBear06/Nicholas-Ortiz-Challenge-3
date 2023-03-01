//  Create variable that points to specific element in HTML
const generateBtn = document.querySelector("#generate");

//  Create variables that will be used to generate password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//  Event listn.- this is tiggered when user selects 'generate password'
generateBtn.addEventListener("click", function () {

let passwordLength = parseInt(prompt("Enter password length- must be between 8 and 128 characters:"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
passwordLength = parseInt(prompt("Enter password length- must between 8 and 128 characters:"));
}
// Prompts
let includeLowercase = confirm("Would you like lowercase characters?");
let includeUppercase = confirm("Would you like uppercase characters?");
let includeNumeric = confirm("Would you like numeric characters?");
let includeSpecial = confirm("Would you like special characters?");
while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
alert("Please select at least one character type.");
includeLowercase = confirm("Would you like lowercase characters?");
includeUppercase = confirm("Would you like uppercase characters?");
includeNumeric = confirm("Would you like numeric characters?");
includeSpecial = confirm("Would you like special characters?");
}

//  Based on selected criteria, this generates the password
let passwordChars = "";
if (includeLowercase) {
passwordChars += lowercaseChars;
}
if (includeUppercase) {
passwordChars += uppercaseChars;
}
if (includeNumeric) {
passwordChars += numericChars;
}
if (includeSpecial) {
passwordChars += specialChars;
}

let password = "";
for (let i = 0; i < passwordLength; i++) {
password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));

}

// this will show the password in an alert
alert("Your generated password is: " + password);
})

