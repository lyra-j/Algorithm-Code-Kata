function solution(s) {
  let answer = s.split(" ");
  let max = Math.max(...answer);
  let min = Math.min(...answer);
  return `${min} ${max}`;
}

