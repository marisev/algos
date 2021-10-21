/* 
A max-heap is a complete binary tree in which the value in each internal node
is greater than or equal to the values in the children of that node.
Mapping the elements of a heap into an array is trivial: 
if a node is stored an index k, then its left child is stored at index 2k+1
and its right child at index 2k+2.
Refer to https://www.geeksforgeeks.org/max-heap-in-java for more details
*/

class MaxWeightHeap {
  constructor() {
    // each node is a small array of size=2, where
    // node[0] - is a value from an original array,
    // node[1] - it's weight (or frequency)
    this.nodes = [];

    // nodes at [0, 1, 2, 3, 4 , 5, 6]  can be represented as a tree:
    //     0
    //  1     2
    // 3 4   5 6
  }

  // getter
  get length() {
    return this.nodes.length;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i) {
    return 2 * i + 1;
  }

  getRightChild(i) {
    return 2 * i + 2;
  }

  insert(node) {
    this.nodes.push(node);

    // insert at the end of an array
    let i = this.nodes.length - 1;
    let parent = this.getParentIndex(i);

    // then bubble it up through its parents until there is no parent's value < than node
    while (i > 0 && this.nodes[i][1] > this.nodes[parent][1]) {
      [this.nodes[i], this.nodes[parent]] = [this.nodes[parent], this.nodes[i]];
      i = parent;
      parent = this.getParentIndex(i);
    }
  }

  // sequential call of extractMax will result in desc-sorted array
  extractMax() {
    if (this.nodes.length === 0) {
      return null;
    }

    const last = this.nodes.length - 1;

    [this.nodes[0], this.nodes[last]] = [this.nodes[last], this.nodes[0]];
    const max = this.nodes.pop();
    this.heapify(0);

    return max;
  }

  heapify(ind) {
    const lPos = this.getLeftChild(ind);
    const rPos = this.getRightChild(ind);

    if (
      this.nodes[lPos] &&
      this.nodes[rPos] &&
      this.nodes[lPos][1] > this.nodes[ind][1] &&
      this.nodes[rPos][1] > this.nodes[ind][1]
    ) {
      const max = this.nodes[lPos][1] < this.nodes[rPos][1] ? rPos : lPos;
      this.swapAndHeapify(max, ind);
    } else if (this.nodes[lPos] && this.nodes[lPos][1] > this.nodes[ind][1]) {
      this.swapAndHeapify(lPos, ind);
    } else if (this.nodes[rPos] && this.nodes[rPos][1] > this.nodes[ind][1]) {
      this.swapAndHeapify(rPos, ind);
    }
  }

  swapAndHeapify(lowerPos, upperPos) {
    [this.nodes[lowerPos], this.nodes[upperPos]] = [
      this.nodes[upperPos],
      this.nodes[lowerPos],
    ];
    this.heapify(lowerPos);
  }
}

// Test array of number+weight pairs
const arr = [
  [1, 2],
  [2, 4],
  [3, 3],
  [4, 1],
  [5, 1],
  [6, 5],
];

const newHeap = new MaxWeightHeap();
for (let i = 0; i < arr.length; i++) {
  newHeap.insert(arr[i]);
}

console.log(newHeap.nodes);

const sorted = [];

while (newHeap.length > 0) {
  sorted.push(newHeap.extractMax());
}

console.log(sorted);
