const swap = (i, j, array) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(i, minIndex, arr);
    }

    return [...arr];
}