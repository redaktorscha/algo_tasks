const swap = (i, j, array) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const insertionsort = (arr) => {

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j >= 0; j -= 1) {
            if (arr[j] < arr[j - 1]) {
                swap(j, j - 1, arr)
            }
        }
    }

    return [...arr];
}