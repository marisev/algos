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

/**
 * In place (no aux space)
 *
 */

function quickSort(arr) {
  qSortHoarePartition(arr, 0, arr.length - 1);
}

function qSortHoarePartition(arr, start, end) {
  if (start >= end) {
    return;
  }

  let smaller = start + 1;
  let bigger = end;

  while (smaller <= bigger) {
    if (arr[smaller] <= arr[start]) {
      smaller++;
    } else if (arr[bigger] > arr[start]) {
      bigger--;
    } else {
      // (arr[smaller] > arr[start] && arr[bigger] <= arr[start]) {
      [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
      smaller++;
      bigger--;
    }
  }

  [arr[start], arr[bigger]] = [arr[bigger], arr[start]];

  qSortHoarePartition(arr, start, bigger - 1);
  qSortHoarePartition(arr, bigger + 1, end);
}
