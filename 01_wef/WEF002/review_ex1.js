const hk = data[0];

for (let key in hk) {
    if (hk[key] instanceof Array) {
        //managing L1 Array
        console.log('--Array--')
        console.log('${key}: ${hk[key]}')
        for (let value of hk[key]) {
            // in - key /index ; of - value
            if (Array.isArray(value)) {
                // managing Array in Array
            }
            console.log(value);

        }
        console.log(value instanceof Object)
    } else {
        console.log(key + ": " + hk[key]);
    }
}

function capitalized(input) {
    let inputString = String(input)
    return inputString[0]
}