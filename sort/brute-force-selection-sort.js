const testsets = [
  {
    initial: [3, 2, 5, 4, 10, 7, 1],
    expected: [1, 2, 3, 4, 5, 7, 10],
  },
  {
    initial: [18, 3, 2, 5, 4, 4, 10, 7, 1, 20],
    expected: [1, 2, 3, 4, 4, 5, 7, 10, 18, 20],
  },
  {
    initial: [4, 2, 8, 7, 1, 3, 5, 6],
    expected: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    initial: [0],
    expected: [0],
  },
];

/**
 * Repeatedly find the minimum from unsorted part and put it at the beginning.
 * Big-o: O(n^2)
 * In place (auxiliary space = O(1))
 * Stable: no
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minInd = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    if (arr[minInd] < arr[i]) {
      [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
    }
  }
}

selectionSort(testsets[0].initial);
console.log(testsets[0].initial);

selectionSort(testsets[1].initial);
console.log(testsets[1].initial);

selectionSort(testsets[2].initial);
console.log(testsets[2].initial);

selectionSort(testsets[3].initial);
console.log(testsets[3].initial);
