const selectionSort = (array) => {
    
    for (let i = 0; i < array.length; i++){
        const secondIndex = indexOfMinimum(array, i);
        swap(array, i, secondIndex);
    }
    return array;
}

const indexOfMinimum = (array, startIndex) => {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    for(let i = minIndex + 1; i < array.length; i++){
        if(array[i] < minValue){
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
}

const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const array = [18, 6, 66, 44, 9, 22, 14]; 
console.log(selectionSort(array));