//UC-1
const fullname = document.querySelector('#fullname');
const fullnameerror = document.querySelector('.fullname-error');
fullname.addEventListener('input',function(){
    let pattern = RegExp('^[A-Z ]{1}[a-zA-Z ]{1,}$');
    if(pattern.test(fullname.value)) fullnameerror.textContent='';
    else fullnameerror.textContent = 'Invalid Name';    
});
//UC-3
const phone = document.querySelector('#phone');
const phoneerror = document.querySelector('.phone-error');
phone.addEventListener('input',function(){
    let Pattern = RegExp('^[0-9]{10}$');
    if(Pattern.test(phone.value)) phoneerror.textContent = '';
    else phoneerror.textContent = 'Invalid Mobile Number';
});

const zip = document.querySelector('#zip');
const ziperror = document.querySelector('.zip-error');
zip.addEventListener('input',function(){
    let Pattern = RegExp('^[1-9][0-9]{5}$');
    if(Pattern.test(zip.value)) ziperror.textContent = '';
    else ziperror.textContent = 'Invalid Zip Code';
});