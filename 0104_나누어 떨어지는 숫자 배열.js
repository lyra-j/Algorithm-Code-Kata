function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5)); // [ 5, 10 ]
console.log(solution([3, 2, 6], 10)); // [ -1 ]

// for, if, 삼항연산자 사용

function solutionA(arr, divisor) {
  let result = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % divisor == 0) {
      result.push(arr[j]); // push 메소드 안의 내용이 forEach와 다른 이유는?
    }
  }
  return result.length == 0 ? [-1] : result.sort((a, b) => a - b);
}

console.log("for반복문 =>", solutionA([5, 9, 7, 10], 5)); // [ 5, 10 ]
console.log("for반복문 =>", solutionA([2, 36, 1, 3], 1)); //
console.log("for반복문 =>", solutionA([3, 2, 6], 10)); // [ -1 ]

// .map() 메소드 사용
function solutionM(arr, divisor) {
  let resultM = arr.map((m) => m % divisor == 0);
  return resultM.length == 0 ? [-1] : resultM.sort((a, b) => a - b);
}

console.log("map 메소드=>", solutionM([5, 9, 7, 10], 5)); // [ false, false, true, true ]
console.log("map 메소드 =>", solutionM([2, 36, 1, 3], 1)); //
console.log("map 메소드 =>", solutionM([3, 2, 6], 10)); //

// .filter() 메소드 사용
function solutionF(arr, divisor) {
  let resultF = arr.filter((f) => f % divisor === 0);
  return resultF.length == 0 ? [-1] : resultF.sort((a, b) => a - b);
}

console.log("filter 메소드 =>", solutionF([5, 9, 7, 10], 5)); // [ 5, 10 ]
console.log("filter 메소드 =>", solutionF([2, 36, 1, 3], 1)); //
console.log("filter 메소드 =>", solutionF([3, 2, 6], 10)); //

// forEach 함수 사용
function solutionE(arr, divisor) {
  let resultE = [];
  arr.forEach((e) => {
    if (e % divisor === 0) resultE.push(e); // push()메소드 안의 내용이 for문과 다른 이유는?
  });
  return resultE.length == 0 ? [-1] : resultE.sort((a, b) => a - b);
}

console.log("forEach =>", solutionE([5, 9, 7, 10], 5)); // [ 5, 10 ]
console.log("forEach =>", solutionE([2, 36, 1, 3], 1)); // [ 1, 2, 3, 36 ]
console.log("forEach =>", solutionE([3, 2, 6], 10)); // [ -1 ]
