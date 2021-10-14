const testsets = [
  {
    initial: [3, 2, 5, 4, 10, 7, 1],
    expected: [1, 2, 3, 4, 5, 7, 10]
  },
  {
    initial: [0],
    expected: [0]
  },
];


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minInd = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minInd = j;
      }
    }
    if (min < arr[i]) {
      [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
    }
  }
  console.log(arr);
}


selectionSort(testsets[0].initial);
// selectionSort(testsets[1].initial);
