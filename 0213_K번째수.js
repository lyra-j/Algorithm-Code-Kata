function solution(array, commands) {
  let answer = [];

  for (let command of commands) {
    const [start, end, idx] = command;
    const cmdArr = array.slice(start - 1, end).sort((a, b) => a - b);

    answer.push(cmdArr[idx - 1]);
  }
  return answer;
}
