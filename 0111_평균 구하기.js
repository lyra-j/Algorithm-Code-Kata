const arr1 = [1, 2, 3, 4];
const arr2 = [5, 5];

function solution(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
}

console.log(solution(arr1));
console.log(solution(arr2));
