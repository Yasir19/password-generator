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
};

// input function (asking the user for inpu password length, password characters) 
var lengthInput = function (){
  // promt the user for password length
  var userInput = window.prompt('Enter password length from 8 to 128 characters.');
  userInput = parseInt(userInput);
//check the user input
if (userInput >=8 && userInput<=128){
  window.alert('you select '+ userInput+ ' characters');
  return userInput;
  //1-if the user enter less or more than 128 
  //2-alert the user that they need to enter a valid input
  //3- recall the function
}else{
  window.alert ('Please enter a valid input');
lengthInput();
}
};

//asking the user for uppercase alphabet
var upperInput= function(){
  //ask the user if they like to add uppercase 
  var userUppercaseIn = window.confirm('would you like UPPERCASE characters');
  // check the return value of the user selection
  if (userUppercaseIn){
    //inform the user if the return value is true
    window.alert('you included UPPERCASE');
   return true;
   //infrom the user if the return value is false
  }else{
    window.alert('you choose not to include UPPERCASE characters');
  }
return false
};


//asking the user for lowecase alphabet
var lowerInput= function(){
    //ask the user if they like to add lowercase
  var userLowercaseIn = window.confirm('would you like lowercase characters');
   // check the return value of the user selection
  if (userLowercaseIn){
        //inform the user if the return value is true
    window.alert('you included lowercase characters');
   return true;
       //inform the user if the return value is false
  }else{
    window.alert('you choose not to include lowercase characters');
  }
return false
};

//asking the user for number alphabet
var numberInput= function(){
    //ask the user if they like to add numbers
  var userNumberIn = window.confirm('would you like to use numbers');
     // check the return value of the user selection
  if (userNumberIn){
      //inform the user if the return value is true
    window.alert('you included unmbers');
   return true;
     //inform the user if the return value is false
  }else{
    window.alert('you choose not to include numbers');
  }
return false
};

//asking the user for number alphabet
function symbolInput() {
   //ask the user if they like to add symbol
  var usersymbolIn = window.confirm('would you like to use spical characters');
     // check the return value of the user selection
  if (usersymbolIn) {
    //inform the user if the return value is true
    window.alert('you included spical characters');
    return true;
    //inform the user if the return value is false
  } else {
    window.alert('you choose not to include spical characters');
  }
  return false;
};


// Assignment Code
var generateBtn = document.querySelector("#generate");
//create generatePassword function to store the inmput function value 
var generatePassword =function(){
  var passwordLength =lengthInput();
  var isUpperCase = upperInput();
  var isLowerCase = lowerInput();
  var isNumbers = numberInput();
  var isSymbols = symbolInput();
//create an array for selecte category 
  var selectCateArr = [{isUpperCase} ,{isLowerCase} ,{isNumbers} ,{isSymbols}];
  //ensure the user select at less on password category 
  while (selectCateArr === false) {
    lengthInput();
    upperInput();
    lowerInput();
    numberInput();
    symbolInput();
    break;
  };
}
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for (var i =0; i <= lengthInput; i++){
    var newPassword = Math.floor(string.number * Math.rondom());
    password+=newPassword
   
  }
   console.log(password);

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
