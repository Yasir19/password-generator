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
 
//create generatedPassword function to store the input function value 
var generatedPassword =function() {
  var passwordLength =lengthInput();
  var isUpperCase = upperInput();
  var isLowerCase = lowerInput();
  var isNumbers = numberInput();
  var isSymbols = symbolInput();
    //ensure the user select at less on password category 
     while (!isUpperCase && !isLowerCase && !isNumbers && !isSymbols){
      window.alert('you did not select any character type, please select at least one type.');
      upperInput();
      lowerInput();
      numberInput();
      symbolInput();
    }
    var userInput = {
      passwordLength : passwordLength,
      isUpperCase : isUpperCase,
      isLowerCase : isLowerCase,
      isNumbers: isNumbers,
      isSymbols :isSymbols
    };
    return userInput;
    }
    // function for getting a random element ftom user Input 
    function randomChar (array){
      var randIndex = Math.floor(Math.random() *array.length); 
      var randEl = array[randIndex];
      return randEl;
    }
    // function to gnerate password with user input 
    var generatePassword = function() {
      var category = generatedPassword();

      // vbariable to store password 
      var output =[];
      //array to store types pf characters that will be included in the password 
      var possCharacters =[];
      // array to store one of each type of selected category to ensure each one will be used 
      var charArray =[];

      // 1- check if the generatedPassword function has UpperCase then 
      //2- add them to possArray
      //3- push it to charArray
      if (category.isUpperCase){
        possCharacters = possCharacters.concat(uppercase());
        charArray.push(randomChar(uppercase()));
      }
       // 1- check if the generatedPassword function has lowerCase then 
      //2- add them to possArray
      //3- push it to charArray
      if (category.isLowerCase){
        possCharacters = possCharacters.concat(lowerCase());
        charArray.push(randomChar(lowerCase()));
      }
       // 1- check if the generatedPassword function has numbers then 
      //2- add them to possArray
      //3- push it to charArray
      if (category.isNumbers){
        possCharacters = possCharacters.concat(number());
        charArray.push(randomChar(number()));
      }
       // 1- check if the generatedPassword function has UpperCase then 
      //2- add them to possArray
      //3- push it to charArray
      if (category.isSymbols){
        possCharacters = possCharacters.concat(spicalChar());
        charArray.push(randomChar(spicalChar()));
      }
       // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
       for (var i= 0; i <category.passwordLength; i++ ){
         var charactersEl = randomChar(possCharacters);
         output.push(charactersEl);
       }
       // Mix in at least one of each guaranteed character in the output
       for (var i =0; i< charArray.passwordLength; i++ ) {
         output[i] =charArray[i];
       }
       // Transform the result into a string and pass into writePassword
       return output.join('');
    }
    // Assignment Code
var generateBtn = document.querySelector("#generate");
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
