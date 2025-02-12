function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (str === " ") {
      answer += " ";
      continue;
    }
    let strArr = upper.includes(str) ? upper : lower;
    let idx = strArr.indexOf(str) + n;
    if (idx >= strArr.length) idx -= strArr.length;
    answer += strArr[idx];
  }
  return answer;
}
