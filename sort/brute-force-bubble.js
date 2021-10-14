const testsets = [
  {
    initial: [18, 3, 2, 5, 4, 4, 10, 7, 1, 20],
    expected: [1, 2, 3, 4, 4, 5, 7, 10, 18, 20]
  },
  {
    initial: [0],
    expected: [0]
  },
];


function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }
    }
  }

  console.log(arr);
  return arr;
}

bubbleSort(testsets[0].initial);