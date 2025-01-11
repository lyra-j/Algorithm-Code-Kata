function solution(n) {
  let result = 0;

  for (let x = 2; x < n; x++) {
    if (n % x === 1) {
      result = x;
      break;
    }
  }
  return result;
}

console.log(solution(10));
console.log(solution(12));
