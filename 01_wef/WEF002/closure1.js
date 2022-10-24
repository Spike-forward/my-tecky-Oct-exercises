function accumulator(input) {
    let sum = 0;
    console.log(num);
    return num + input;
    return (num) => {
        sum = sum + num;
        return sum;
    }
}

// advantage of closue for encapluation
// business logic very important for programmer
//

function accumulator() {
    let sum = 0;

    return {
        reset: () => {
            sum = 0;
            return sum;
        },
        add: (num) => {
            sum = sum + num;
            return sum;
        },
        result: () => {
            return sum;
        }
    }
}
//object.freeze