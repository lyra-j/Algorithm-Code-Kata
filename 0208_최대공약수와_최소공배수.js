function solution(n, m) {
  let answer = [];
  let a = Math.min(n, m);
  let b = Math.max(n, m);
  const gcd = (x, y) => {
    return x % y === 0 ? y : gcd(y, x % y);
  };
  let gd = gcd(b, a);
  answer = [gd, (a * b) / gd];

  return answer;
}
