// the aync function should return the promise object

const multiply = (n1, n2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n1 < 0 || n2 < 0)
                return reject('number is -ve');
            let product = n1 * n2;
            resolve(product);
        }, 1000);
    })
}

multiply(-1, 5).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})


const validateBill = (bilAmount) => {
    if (bilAmount < 0)
        return console.log('Invalid Bill Amount');
    console.log('Valid');
}

const calculateBill = (bilAmount, descount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(bilAmount - (bilAmount * descount));
        }, 2000);
    })
}

let bil = 2000;
let dis = 0.25;

calculateBill(bil, dis).then((result) => {
    console.log(result);
});
validateBill(bil);


// ------------------------------ promise chaining ---------------------------------

const calculateBill = (bill, dis) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  // must be sync to be promise
            dis <= 0? reject('invalid discount') : resolve(bill - (bill * dis));
        }, 2000);
    })
}

const validate = (bill) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            bill <= 0 ? reject('Invalid Bill Amount') : resolve(bill);
        })
    })
}

let bil = 20;
let dis = 0.25;

validate(bil).then(amount => {
    return calculateBill(amount, dis);
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

