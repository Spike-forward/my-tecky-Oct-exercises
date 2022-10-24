const name = ["John", "Peter", "Ben",
        (",")

        //map, The map() method creates a new array populated with the results of calling a provided function on every element in the original calling array.
        const result = []
        for (let num of[1, 2, 3, 4, 5, 6, 7]) {
            result.push(num ** 2);
        }

        const result = [1, 2, 3, 4, 5, 6, 7].map(function(elem) {
            return elem * elem;
        });
        // -> [1,4,9,16,25,36,49]

        const result = [1, 2, 3, 4, 5, 6, 7].map((elem) => elem * elem);
        // -> [1,4,9,16,25,26,49]



        //filter

        //reduce
        // reduce can do summary
        // reduce can perform odd number and every 
        The reduce() method executes a user - supplied "reducer"
        callback

        function on each element of the array, in order, passing in the
        return value from the calculation on the preceding element.The final result of running the reducer across all elements of the array is a single value.