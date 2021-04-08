// Time O(n log n);Space O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // The  largest value in arrays always dictates the speed!!!
  // 1.So when fastest  = false we want to eliminate larger values first=>
  //So we should compare the largest pairs, so that it minimizes the result
  // 2. If fastest = true =>compare largest with smallest
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = fastest ? 0 : blueShirtSpeeds.length - 1;
  let max = 0;
  while (p1 < redShirtSpeeds.length) {
    max += Math.max(redShirtSpeeds[p1], blueShirtSpeeds[p2]);
    p1++;
    fastest ? p2++ : p2--;
  }
  return max;
}
