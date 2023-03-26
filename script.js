//generate character function by using Math.
let getRandomUpperCase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
let getRandomLowerCase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
let getRandomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
let getRandomSpecialChar = function (){
  let symbols ='!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random()* symbols.length)];
};

// input function (asking the user for input password length, password characters) 
let lengthInput = function (){
    // prompt the user for password length
  let userInput = window.prompt('Enter password length from 8 to 128 characters.');
  userInput = parseInt(userInput);
//check the user input
if (userInput >=8 && userInput<=128){
  window.alert('You select '+ userInput+ ' characters');
  return userInput;
  //1-if the user enter less or more than 128 
  //2-alert the user that they need to enter a valid input
  //3- recall the function
}else{
  window.alert ('Please enter a valid input');
lengthInput();
}
};

//asking the user for uppercase alphabet function
let upperInput= function(){
  //ask the user if they like to add uppercase 
  let userUppercaseIn = window.confirm('Would you like UPPERCASE characters');
  // check the return value of the user selection
  if (userUppercaseIn){
    //inform the user if the return value is true
    window.alert('you included UPPERCASE');
   return true;
    //inform the user if the return value is false
  }else{
    window.alert('you choose not to include UPPERCASE characters');
  }
return false
};


//asking the user for lowecase alphabet
let lowerInput= function(){
    //ask the user if they like to add lowercase
  let userLowercaseIn = window.confirm('Would you like lowercase characters');
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

//asking the user for numbers
let numberInput= function(){
    //ask the user if they like to add numbers
  let userNumberIn = window.confirm('would you like to use numbers');
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
  let usersymbolIn = window.confirm('would you like to use spical characters');
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
 
//create generatedPassword function to store the input function value
let generatedPassword =function() {
  let passwordLength =lengthInput();
  let isUpperCase = upperInput();
  let isLowerCase = lowerInput();
  let isNumbers = numberInput();
  let isSymbols = symbolInput();
    //ensure the user select at least one password category 
    if (isUpperCase === false && isLowerCase === false && isNumbers === false && isSymbols ===false){
      window.alert('you did not select any character type, please select at least one type.');
      upperInput();
      lowerInput();
      numberInput();
      symbolInput();
    }

    let userInput = {
      passwordLength : passwordLength,
      isUpperCase : isUpperCase,
      isLowerCase : isLowerCase,
      isNumbers: isNumbers,
      isSymbols :isSymbols
    };
    return userInput;
    }
    // function for getting a random element from an array
    function randomChar (array){
      console.log(array);
      let randIndex = Math.floor(Math.random() *array.length); 
      let randEl = array[randIndex];
      return randEl;
    }
    // function for getting a random element from an array
    let generatePassword = function() {
      let category = generatedPassword();

      // letiable to store password result
      let output =[];
      //array to store types of characters that will be included in the password
      let possCharacters =[];
      // array to store one of each type of selected category to ensure each one will be used 
      let charArray =[];
    // if the user wants uppercase letters, add them to the possCharacters array
    if (category.isUpperCase) {
      possCharacters.push(getRandomUpperCase);
      charArray.push(getRandomUpperCase());
    }
  
    // if the user wants lowercase letters, add them to the possCharacters array
    if (category.isLowerCase) {
      possCharacters.push(getRandomLowerCase);
      charArray.push(getRandomLowerCase());
    }
  
    // if the user wants numbers, add them to the possCharacters array
    if (category.isNumbers) {
      possCharacters.push(getRandomNumber);
      charArray.push(getRandomNumber());
    }
  
    // if the user wants special characters, add them to the possCharacters array
    if (category.isSymbols) {
      possCharacters.push(getRandomSpecialChar);
      charArray.push(getRandomSpecialChar());
    }
    // loop through the rest of the password length and add random characters from the possCharacters array
    for (let i = charArray.length; i < category.passwordLength; i++) {
      let randomFunc = possCharacters[Math.floor(Math.random() * possCharacters.length)];
      charArray.push(randomFunc());
    }
      // shuffle the charArray to randomize the password
      charArray.sort(function(a, b){return 0.5 - Math.random()});
  
      // join the charArray into a string and return the result
      output = charArray.join("");
      return output;
    }
    // Assignment Code
let generateBtn = document.querySelector("#generate");
  
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
