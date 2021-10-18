const testsets = [
  {
    initial: [18, 3, 2, 5, 4, 4, 10, 7, 1, 20],
    expected: [1, 2, 3, 4, 4, 5, 7, 10, 18, 20],
  },
  {
    initial: [0],
    expected: [0],
  },
];

/**
 * Repeatedly swap adjacent elements if they're in wrong order
 *
 * Big-oh:
 *    Worst & Average: O(n^2)
 *    Best: O(n)
 * In-place: yes
 * Stable: yes
 * Auxiliary Space: O(1)
 */
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;

        // swap using ES6 array destructuring (unpack an element and assign its value to another variable)
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    // optimization for best case (when array is already sorted)
    if (!swapped) {
      break;
    }
  }

  return arr;
}

bubbleSort(testsets[0].initial);
console.log(testsets[0].initial);
