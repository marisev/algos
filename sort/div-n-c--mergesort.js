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

mergeSort(testsets[0].initial);
console.log(testsets[0].initial);
mergeSort(testsets[1].initial);
console.log(testsets[1].initial);


function mergeSort(arr) {
  mSort(arr, 0, arr.length - 1);
}

function mSort(arr, start, end) {
  // leaf worker
  if (start === end) {
    return;
  }

  // divide & conquer
  const mid = Math.floor((start + end) / 2);

  mSort(arr, start, mid);
  mSort(arr, mid+1, end);


  // merge two sorted halves
  const tmpArr = [];
  let left = start;
  let right = mid + 1;

  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      tmpArr.push(arr[left]);
      left++;
    } else {
      tmpArr.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    tmpArr.push(arr[left]);
    left++;
  }

  while (right <= end) {
    tmpArr.push(arr[right]);
    right++;
  }
  for (let i = 0; i < tmpArr.length; i++) {
    arr[start + i] = tmpArr[i];
  }

  return;
}