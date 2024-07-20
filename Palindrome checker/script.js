const checkBtn = document.getElementById('check-btn');
checkBtn.addEventListener('click', () => {
    let enteredValue = document.getElementById('text-input').value;
    let inputValue = enteredValue.replace(/[_\,\.\-\(\)\/\\\s+]/g, '').toLowerCase();
    if(inputValue === ''){
        alert('Please input a value');
    }else{
        let reverseValue = inputValue.split('').reverse().join('');
        const result = document.getElementById('result');
        if(inputValue === reverseValue){
            result.innerHTML = `<strong>${enteredValue}</strong> is a palindrome`;
        }else{
            result.innerHTML = `<strong>${enteredValue}</strong> is not a palindrome.`;
        }
    }
});
