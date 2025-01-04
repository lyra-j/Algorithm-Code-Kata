// 1-1. 입력된 수가 짝수라면 2로 나눔
// 1-2. 이볅된 수가 홀수라면 3을 곱하고 1을 더함.
// 2. 결과로 나온 수에 위 작업을 1이 될 때까지 반복.
// 3. 몇번을 작업했는지 센다.
// 4. 작업을 500번 반복할 때까지 1이 되지 않는다면 -1을 반환
// 5. 주어진 수가 1이라면 0을 반환

// for
function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++){
    if (num != 1){
      num = num %2 == 0 ? num / 2 : num * 3 + 1;
    } else { 
      return answer = i;
    }
  }
  return answer = -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1

// while
function collatz(num){
  let count = 0;

  while(num != 1 && count != 500){
    num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
    count ++;
  }
  return num == 1 ? count : -1;
}

console.log(collatz(6)); // 8
console.log(collatz(16)); // 4
console.log(collatz(626331)); // -1

// 다른 사람의 풀이
function collatz2(num, count = 0){
  return num == 1 ? (count >= 500 ? -1 : count) : collatz2(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

console.log(collatz2(6)); // 8
console.log(collatz2(16)); // 4
console.log(collatz2(626331)); // -1
