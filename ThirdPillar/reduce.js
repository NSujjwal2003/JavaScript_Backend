function sum(prevResult, current) {
  return prevResult + current;
}
const arr = [1, 2, 3, 4, 5];
const ans = arr.reduce(sum);
console.log(ans);