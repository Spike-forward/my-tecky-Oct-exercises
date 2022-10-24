function bubbleSort(arr) {
    const sortedArr = arr.slice(0);
    let swapped = true;

    while (swapped) {
        swapped = false
        for (let i = 1; i < sortedArr.length; ++i) {
            if (sortedArr[i - 1] > sortedArr[i]) {
                [sortedArr[i], sortedArr[i - 1]] = [sortedArr[i - 1], sortedArr[i]]; // swap items
                swapped = true;
            }
        }
    }

    return sortedArr;
}