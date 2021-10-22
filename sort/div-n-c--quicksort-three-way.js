function threePartitionQuickSort(arr) {
  quickSort(arr, 0, arr.length - 1);
}

/*
    arr[start ... leftPointer] all elements greater than pivot
    arr[leftPointer + 1 ... rightPointer - 1] all occurrences of pivot
    arr[rightPointer ... end] all elements smaller than pivot
*/
function partition(arr, start, end) {
  // pre-randomize pivot
  const pivotInd = getRandom(start, end);
  [arr[start], arr[pivotInd]] = [arr[pivotInd], arr[start]];

  const pivot = arr[start];
  let leftPointer = start; // end of the part where elements > pivot
  let rightPointer = end; // beginning of the part with elements < pivot
  let i = start; // to scan the array from left to right

  while (i <= rightPointer) {
    if (arr[i] > pivot) {
      [arr[i], arr[leftPointer]] = [arr[leftPointer], arr[i]];
      leftPointer++;
      i++;
    } else if (arr[i] < pivot) {
      [arr[i], arr[rightPointer]] = [arr[rightPointer], arr[i]];
      rightPointer--;
    } else {
      i++;
    }
  }
  return [leftPointer, rightPointer];
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  const [leftPointer, rightPointer] = partition(arr, start, end);

  quickSort(arr, start, leftPointer - 1);
  quickSort(arr, rightPointer + 1, end);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
