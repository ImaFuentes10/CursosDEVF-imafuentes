const primes = [2, 3, 5, 7]//, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function doSearch(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    let mid;

    while (max >= min) {
        mid = Math.floor((min + max)/2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) min = mid + 1;
        else max = mid - 1;
    }

    return -1;
}

console.log(doSearch(primes, 5));
