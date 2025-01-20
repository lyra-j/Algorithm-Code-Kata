// [0~9]사이의 정수가 랜덤하게 들어있는 배열에서
// 없는 숫자를 찾아서 더하기

// 1~9 까지의 합(45) - [numbers 합]

function solution(numbers) {
  let arrSum = 0;
  let answer = 45;

  for (let i = 0; i < numbers.length; i++) {
    arrSum += numbers[i];
  }

  return answer - arrSum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 16
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 4

// .includes()

function solutionA(numbers) {
  let result = 0;

  // 1~9까지의 숫자중에서 이기 떄문에 1부터 시작하고 배열의 길이로 조건의 제한을 하지 않음.
  for (let j = 1; j <= 9; j++) {
    if (!numbers.includes(j)) {
      result += j;
    }
  }
  return result;
}

console.log(solutionA([1, 2, 3, 4, 6, 7, 8, 0])); // 16
console.log(solutionA([5, 8, 4, 0, 6, 7, 9])); // 4

// reduce 활용

function solution(numbers) {
  var answer = 45 - numbers.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
