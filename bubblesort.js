const swap = (i, j, array) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
  
  const bubbleSort = (arr) => {
    // let needSort = true;
  
    // while (needSort) {
    //   needSort = false;
  
    //   for (let i = 0; i < arr.length; i += 1) {
    //     if (arr[i] > arr[i + 1]) {
    //       swap(i, i + 1, arr);
    //       needSort = true;
    //     }
    //   }
    // }

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
            }
        }
    }
  
    return [...arr];
  }

  console.log(bubbleSort([3, 6, 4, 7, 8, 2, 1]));