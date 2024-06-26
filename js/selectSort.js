function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        console.log(i, minIndex)
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    console.log(arr);
  }

  return arr;
}

const arrs = [2,3,1,55,12,41];

console.log(selectSort(arrs));