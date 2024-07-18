const numValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanValues = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertToRoman(num) {
    let result = '';
    for (let i = 0 ; i < numValues.length; i++){
        while(num >= numValues[i]){
            result += romanValues[i];
            num -= numValues[i];
        }
    }
    return result;
}

document.getElementById("convert-btn").addEventListener("click", function(){
    let numberString = document.getElementById("number").value;
    let number = Number(numberString);
    let output = document.getElementById("output");

    if (numberString === ''){
        output.innerHTML = 'Please enter a valid number';
        document.querySelector('.explanation').classList.add('js-explanation-danger');
    }else if(number < 1){
        output.innerHTML = 'Please enter a number greater than or equal to 1';
        document.querySelector('.explanation').classList.add('js-explanation-danger');
    }else if(number > 3999){
        output.innerHTML = 'Please enter a number less than or equal to 3999';
        document.querySelector('.explanation').classList.add('js-explanation-danger');
    }else{
        console.log(convertToRoman(number));
        document.querySelector('.explanation').classList.add('js-explanation');
        output.innerHTML = convertToRoman(number);
    }

});