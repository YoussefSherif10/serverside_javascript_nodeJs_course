const fs = require('fs');
const readData = (fileName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(fileName, (err, data) => {
                if (err)
                    return reject('Error in accessing file ', err.message);
                resolve(data);
            })
        }, 0);
    })
}

readData('input.txt').then((data) => {
    console.log(data);
}, (err) => {
    debugger
    console.log(err);
});