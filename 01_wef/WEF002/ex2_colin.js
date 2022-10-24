const cards = [
    ['Spade', 'A'],
    ['Diamond', 'J'],
    ['Club', '3'],
    ['Heart', '6'],
    ['Spade', 'K'],
    ['Club', '2'],
    ['Heart', 'Q'],
    ['Spade', '6'],
    ['Heart', 'J'],
    ['Spade', '10'],
    ['Club', '4'],
    ['Diamond', 'Q'],
    ['Diamond', '3'],
    ['Heart', '4'],
    ['Club', '7']
];

console.log()
let answer = cards.reduce() =>

    // Question #2 Filter function
    //Method 2
    // const result = [1,2,3,4,5,6,7].filter( function(elem) {
    //     return elem % 2 == 0;
    // });
    // // -> [2,4,6]

    // const result = [1,2,3,4,5,6,7].filter( (elem) => elem % 2 == 0);
    // // -> [2,4,6]
    answer = cards.filter((card) => {
        if (compareCard())
    })