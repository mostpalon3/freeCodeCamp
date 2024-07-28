let price = 19.5;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const initialCid = cid;
let changeContainer = document.querySelector('.change-container');
cid.forEach(elem => {
    changeContainer.innerHTML += `<p>${elem[0]}:$${elem[1]}</p>`
})

const currencyUnitCents = {
    "PENNY":1,
    "NICKEL":5,
    "DIME":10,
    "QUARTER":25,
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":10000
}

document.querySelector('.total').innerHTML = `Total:$${price}`;
const purchased = document.getElementById('purchase-btn');
let inputDom = document.getElementById('cash');
const changeDue = document.getElementById('change-due');


purchased.addEventListener('click', () => {
    const cash = Number(inputDom.value);
    if(cash < price){
        alert('Customer does not have enough money to purchase the item');
    }else if(cash === price){
        changeDue.innerHTML = "No change due - customer paid with exact cash"
    }else{
    const objectReturned = checkCashRegister(cash);
    changeDue.innerHTML = `Status: ${objectReturned.status} `
    objectReturned.change.forEach(elem => {
        changeDue.innerHTML += `<p>${elem[0]}: $${elem[1]}</p>`
    });
    if(objectReturned.status !== 'INSUFFICIENT_FUNDS'){
    changeContainer.innerHTML = '';
    cid.forEach(elem => {
        changeContainer.innerHTML += `<p>${elem[0]}:$${elem[1]}</p>`
    })
    }
    }
});
function checkCashRegister(cash){

    let changeAmount = cash*100 - price*100;
    let changeAmountCheck = changeAmount;
    console.log(changeAmountCheck);
    let change = [];
    let status = '';

    let cidSum = 0;
    let totalSum = 0;
    cid.forEach(elem => {
        cidSum += elem[1]*100;
    })
    if(cidSum >= changeAmount){
    let filterCid = cid.filter(element => element[1] !== 0).reverse();
    
    filterCid.forEach(element => {
        let currency = element[0];
        let currAmount = element[1]*100
        let amount = 0;
        while(changeAmount >= currencyUnitCents[currency] && currAmount > 0){
            amount += currencyUnitCents[currency];
            changeAmount -= currencyUnitCents[currency];
            currAmount -= currencyUnitCents[currency];
            element[1] = currAmount/100;
        }
        if (amount !== 0){
            change.push([currency,amount/100]);
        }
    });
    }
    if(changeAmount > 0){
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    }else if(changeAmount == 0 && changeAmountCheck == cidSum){
        status = 'CLOSED';
        inputDom.value = '';
    }else{
        status = 'OPEN';
        inputDom.value = '';
    }
    return {'status': status, 'change': change};
}