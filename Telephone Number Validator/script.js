const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const inputDOM = document.getElementById('user-input');
let results = document.getElementById('results-div');
function telephoneValidator(str) {
    let regExp =  /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\s\-]?\d{4}$/;
    return regExp.test(str);
}
clear.addEventListener('click', () => {
    inputDOM.value = '';
    results.innerHTML = '';
});
check.addEventListener('click', () => {
    let inputStr = inputDOM.value;
    let resBool = telephoneValidator(inputStr);
    if(inputStr === ''){
        alert('Please provide a phone number');
    }else if(resBool){
        results.innerHTML += `<p style = "color: green">Valid US number: ${inputDOM.value}</p>`;
    }else{
        results.innerHTML += `<p style = "color: red">Invalid US number: ${inputDOM.value}</p>`;
    }
})