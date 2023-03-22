const validateBill = (billAmount) => {
     if (billAmount <= 0)
         console.log('Invalid Bill Amount');
     else
         console.log('Valid');
}

let billAmt = 2000;
let dicount = 0.25;

const afterDiscount = (error, billAmount, percent) => {
    if (error){
        return console.log(error);
    }
    console.log(billAmount - (billAmount * percent));
}

setTimeout(afterDiscount, 5000, undefined, billAmt, dicount);
validateBill(billAmt, dicount);