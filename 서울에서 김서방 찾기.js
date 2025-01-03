// 배열 seoul의 element중 "Kim"의 위치 x 를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수
// "Kim"은 오직 한 번만 나타남

let seoul = ["jane", "Kim"];

function solution(seoul) {
  let answer = ''

  for (let i = 0; i < seoul.length; i++){
    if (seoul[i] == "Kim"){
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer
}

// console.log(solution(seoul)); // 1번 째 반환

//.indexOf
function solution(seoul) {
  return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}

// findIndex()
const solution = (seoul) => 
`김서방은 ${seoul.findIndex(s => s === 'Kim')}에 있다`;