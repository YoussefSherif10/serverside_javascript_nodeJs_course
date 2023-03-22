const calculateBill = (bill, dis) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (dis <= 0) ? reject('INVALID DISCOUNT') : resolve(bill - (bill*dis));
        }, 2000);
    })
}

const validate = (bill) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (bill <= 0) ? reject('INVALID BILL') : resolve(bill);
        })
    })
}

// we make a function that invokes both above functions
const totalBillAmount = async (bill, dis) => {
    /**
     * any function that makes a call to a return promise function must be async/await
     * these two calls are equivalent to two thens chained together
     * @type {unknown}
     */
    const amount = await validate(bill);
    const total = await calculateBill(amount, dis);
    return total;
}

// used one then block for the two async functions
totalBillAmount(2000, 0.25).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});