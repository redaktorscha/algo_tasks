const binSearch = (arr, n) => {
  let left = 0;
  let right = arr.length - 1;


  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);

    if (arr[midIdx] === n) {
        return midIdx;
    }

    if (arr[midIdx] < n) {
        left = midIdx + 1;
    } else {
        right = midIdx - 1;
    }
  }

  return -1;
}