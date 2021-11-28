# password-generator

### // Assignment Code
var generateBtn = document.querySelector("#generate");
graping ID generate for the button 

### // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
the code have butten to generate basswor and have a method of eventListener for a "click"


### // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  where the password will generate

// var uppercaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var lowercaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var numberArr=['0','1','2','3','4','5','6','7','8','9'];
// var symbols = ["'","!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",",".","|"];
// for (var i =0; i< uppercaseArr.length; i++){
//   console.log(uppercaseArr[i]);
// }
// for (var i =0; i< lowercaseArr.length; i++){
//   console.log(lowercaseArr[i]);
// }
// for (var i =0; i< numberArr.length; i++){
//   console.log(numberArr[i]);
// }
// for (var i =0; i< symbols.length; i++){
//   console.log(symbols[i]);
// }
//ask the user for the password length
  while (selectCateArr){
    window.alert('You did not select any password catogery, please select at least one password category');
    upperInput();
    lowerInput();
    numberInput();
    symbolInput();
    break;
  }
