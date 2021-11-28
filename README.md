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
1. Create another variable that will start empty, could be global or inside the function - but will hold all possible options var options = []
2. Write if statements, for each true/false variable - and evaluate what the user chose if (isUppercase) { //do something here }
3. Inside the if statement, push that array into the BIG options array if user said yes --> options.push(uppercase) **I would console log the options array to make sure it's how you want it to be
4. After if statements, options array should hold all potential characters the user said yes to, so now loop over it and create the password string, you will loop over it using the lengthInput





1:40
So - just work on getting that array/if statement to work - then move onto creating password once that does what is is expected
1:40
You got this!!
1:41
Work on those next steps, and if you need more assistance after please reach out to us again!