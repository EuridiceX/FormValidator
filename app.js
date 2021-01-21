const form =document.querySelector('#form');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const password2 =document.querySelector('#password2');



form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    checkEmail(email);
    checkUsername(username);
    checkPassword(password);
    checkPassword(password2);
    checkPasswordsMatch(password, password2);
  });
  
function checkEmail(email){
   
    if (!checkIfFieldHasValue(email)){
     showError(email, `${getFieldName(email)} is required`);
    }
    else if (!checkIfEmailIsValid(email)){
          showError(email, `${getFieldName(email)} is not valid! `)
        }
         else {
            showSuccess(email);
        }
}
function checkUsername(username) {
    if (!checkIfFieldHasValue(username)){
        showError(username, `${getFieldName(username)} is required`);
       }
       else if (!checkLength(username,2,10)){
             showError(username, `${getFieldName(username)} should be between 3 and 10 ch.!`)
           }
            else {
               showSuccess(username);
           }
}
   function checkPassword(password) {
    if (!checkIfFieldHasValue(password)){
        showError(password, `${getFieldName(password)} is required`);
       }
       else if (!checkLength(password,2,10)){
             showError(password, `${getFieldName(password)} should be between 3 and 10 ch.!`)
           }
            else {
               showSuccess(password);
           }
}

  function showError(input, errorMessage){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const smallTag= formControl.querySelector('small');
    console.log(input);
    smallTag.innerText=errorMessage;
    
  }

  function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
  }
  
  function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

//Checks
  function checkIfFieldHasValue(input) {
    
      if (input.value.trim() === '') 
        return false;
      else 
        return true; 
  }

function checkIfEmailIsValid(emailTag){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailTag.value).toLowerCase());
}
function checkLength(input, minValue, maxValue) {
    const length= input.value.length;
    return  length>minValue && length<maxValue;
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}