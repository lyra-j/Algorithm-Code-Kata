function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution(12));
console.log(solution(5));
