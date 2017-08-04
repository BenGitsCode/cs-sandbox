let numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch (array, targetValue) {
    let min = 0;
    let max = array.length - 1;


    while(min <= max) {
           let middle = Math.floor((max + min) / 2);
           let middleValue = array[middle];

        if (middleValue === targetValue) {
            return middle;
        }
        else if (targetValue>middleValue) {
            min = middle + 1;
        }
        else {
            max = middle - 1;
        }
    }
    return -1;
};


let result73 = binarySearch(numbers, 73);
console.log("Number 73 is: " + result73);