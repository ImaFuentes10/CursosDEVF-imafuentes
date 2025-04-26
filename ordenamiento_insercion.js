const insert = (array, rightIndex, value) => {
    let i;
    for (i = rightIndex; i >= 0 && array[i] > value; i--){
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
    //console.log(array);
}

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) insert(array, i - 1, array[i]);
    return array;
}

const array = [22, 11, 99, 88, 9, 7, 42];
console.log(insertionSort(array));
