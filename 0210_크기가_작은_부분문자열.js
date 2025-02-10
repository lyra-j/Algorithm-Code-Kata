function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let str = t.slice(i, i + p.length);
    if (+p >= +str) count++;
  }
  return count;
}
