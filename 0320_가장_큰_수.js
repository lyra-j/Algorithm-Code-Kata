function solution(numbers) {
  const answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
