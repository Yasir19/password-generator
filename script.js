//create an object to contain all the characters 

// input function (asking the user for inpu password length, password characters) 
var lengthInput = function (){
  // promt the user for password length
  var userInput = window.prompt('Enter password length from 8 to 128 characters.');
  userInput = parseInt(userInput);
//check the user input
if (userInput >=8 && userInput<=128){
  window.alert('you select '+ userInput+ ' characters');
}else{
  window.alert ('Please enter a valid input')
  lengthInput();
}
};
lengthInput();
//assking the user for uppercase alphabet
function upperInput(){
  var userUppercaseIn = window.confirm('would you like UPPERCASE characters');
  if (userUppercaseIn){
    window.alert('you included UPPERCASE');

   return uppercase;
  }else{
    window.alert('you chooset not to include UPPERCASE');
  }
  console.log(upperInput());
};
upperInput();
console.log(upperInput());




//generate character function by using Math.
var uppercase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var lowerCase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var number = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
var spicalChar = function (){
  var symbols ='!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random()* symbols.length)];
}
console.log(number());
var passwordChar = {
  upperAlphabet : uppercase,
  lowerAlphaber : lowerCase,
  numbers : number,
  symbols : spicalChar
};


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
