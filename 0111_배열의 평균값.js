const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

function solution(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result / numbers.length;
}

console.log(solution(arr1));
console.log(solution(arr2));
