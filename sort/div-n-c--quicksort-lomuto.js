// The key process in QuickSort is partition.

// Lomuto partitioning - rearrange array without using extra space
// (in place).

// Rearrange elements of the given part
// of the array so that the first half is less than selected pivot,
// and the second part is larger than selected pivot.
// Scan array from left to right,
//

const testsets = [
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

quickSort(testsets[0].initial);
console.log(testsets[0].initial);
quickSort(testsets[1].initial);
console.log(testsets[1].initial);
quickSort(testsets[2].initial);
console.log(testsets[2].initial);

function quickSort(arr) {
  qSortInPlace(arr, 0, arr.length - 1);
}

function qSortInPlace(arr, start, end, level = 0) {
  // leaf
  if (start >= end) {
    return;
  }

  const pivot = arr[start];

  // smPointer - points to the last index of orange partition (partition with smaller numbers)
  // bgPointer - points to the last index of green partition (partition with bigger numbers)
  let smPointer = start;

  for (let bgPointer = start + 1; bgPointer <= end; bgPointer++) {
    if (arr[bgPointer] < pivot) {
      smPointer++;
      [arr[smPointer], arr[bgPointer]] = [arr[bgPointer], arr[smPointer]];
    }
  }

  [arr[smPointer], arr[start]] = [arr[start], arr[smPointer]];

  qSortInPlace(arr, start, smPointer - 1, level + 1);
  qSortInPlace(arr, smPointer + 1, end, level + 1);
}
