//행렬의 덧셈

function solution(arr1, arr2) {
  //행렬 arr1, arr2가 있을 때
  let answer = [[]]; // 결과값은 배열로 표기

  for (let i = 0; i < arr1.length; i++) {
    // arr1 의 마지막 까지 반복
    let sum = []; // 합계 sum 이라는 배열 선언

    for (let j = 0; j < arr1[i].length; j++) {
      // 다른 배열의 길이는 arr1의 크기와 같아야 하기에 arr1길이 만큼 반복
      sum.push(arr1[i][j] + arr2[i][j]); // push로 sum 배열의 끝에 값을 더해서 추가
    }
    answer.push(sum); // answer에 sum의 값을 모두 넣어줌.
  }
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);

// 예를 들어 arr1[[a1, a2], [a3, a4]], arr2[[b1, b2],[b3, b4]] 로 주어졌다고 했을 때,
// answer은 [[a1+b1, a2+b2], [a3+b3, a4+b4]]가 되어야 한다.
// 이중 for문을 사용, i인덱스 j번째 요소를 나타낼 수 있도록 만들어 준다.
// 첫 for문에서 빈 배열을 만들어 두번째 배열로 push하고, 그 배열은 다시 answer배열에 push되어 정답이 반환되게 된다.

function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);

function solution(x) {
  let sum = 0;
  let arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum == 0 ? true : false;
}

// 두 정수 사이의 합
// a, b가 주어 졌을 때
// a<b 경우
// b>a 경우
// a==b 경우

function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else if (b < a) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return a === b ? a : answer;
}
