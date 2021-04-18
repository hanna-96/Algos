// Design a Leaderboard class, which has 3 functions:

// addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
// top(K): Return the score sum of the top K players.
// reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
// Initially, the leaderboard is empty.

var Leaderboard = function () {
  this.map = new Map();
};

Leaderboard.prototype.addScore = function (playerId, score) {
  if (!this.map.has(playerId)) this.map.set(playerId, score);
  else {
    let currentScore = this.map.get(playerId);
    currentScore += score;
    this.map.set(playerId, currentScore);
  }
};
//Time O (K) + O (n log n) = O(n log K); O(K) takes to construct heap and then the rest of the N -K elements we perform the extrach max score
//Space O(N+K), N is used to store scores in heap and K is used to store elements in heap.
Leaderboard.prototype.top = function (K) {
  const heap = new Heap([...this.map.entries()]);
  let sum = 0;
  while (K > 0) {
    sum += heap.peek();
    heap.remove();
    K--;
  }
  //below can be used as another approach without heap BUT it requires sorting
  //     let allScores = [...this.map.entries()].sort((a,b) => b[1] - a[1]);
  //     // console.log('allScores sorted',allScores)

  //     for(let [player,score] of allScores){
  //         // console.log('score',score)
  //         if(K>0){
  //             sum+=score;
  //             // console.log('sum',sum)
  //             // allScores.shift();
  //             K--;
  //         }
  //     }
  return sum;
};

Leaderboard.prototype.reset = function (playerId) {
  this.map.delete(playerId);
};

class Heap {
  constructor(arr) {
    this.heap = this.buildHeap(arr);
  }
  buildHeap(arr) {
    let parentIdx = Math.floor((arr.length - 2) / 2);
    for (let currentIdx = parentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, arr.length - 1, arr);
    }
    return arr;
  }
  siftDown(currentIdx, endIdx, arr) {
    let leftChildIdx = 2 * currentIdx + 1;
    while (leftChildIdx <= endIdx) {
      let rightChildIdx =
        2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
      let idxToSwap;
      if (
        rightChildIdx !== -1 &&
        arr[rightChildIdx][1] > arr[leftChildIdx][1]
      ) {
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }
      if (arr[idxToSwap][1] > arr[currentIdx][1]) {
        this.swap(idxToSwap, currentIdx, arr);
        currentIdx = idxToSwap;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  peek() {
    return this.heap[0][1]; // return the top 1st score
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
}
