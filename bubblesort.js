const swap = (i, j, array) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  
  const bubbleSort = (arr) => {
    let needSort = true;
  
    while (needSort) {
      needSort = false;
  
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > arr[i + 1]) {
          swap(i, i + 1, arr);
          needSort = true;
        }
      }
    }
  
    return [...arr];
  }