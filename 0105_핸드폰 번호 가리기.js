// function solution(phone_number) {
//   var answer = '';
//   return answer;
// }

// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 '*'으로 가린 문자열을 리턴
// 전체 입력된 숫자중 맨 뒤 4자리를 세어야 함.
// 그 앞의 숫자는 문자열갯수만큼 *로 가려서 표기

// for, if

function solution(phone_number) {
  let answer = "";

  for (let i = 0; i < phone_number.length; i++) {
    i < phone_number.length - 4 ? (answer += "*") : (answer += phone_number[i]);
  }
  return answer;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));

// 문자열의 갯수 -4 만큼 , *로 치환
// .slice(), .replace(), .repeat()

function solutionR(phone_number) {
  let str = phone_number.slice(0, -4); // 0번 부터 -4번 까지 잘라냄
  return phone_number.replace(str, "*".repeat(str.length)); // phone_number문자열중, str으로 잘라낸 길이만큼 *로 치환하기
}

console.log(solutionR("01033334444"));
console.log(solutionR("027778888"));

// 정규 표현식으로 replace만 활용하기
function solutionRP(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

// '/'로 감싸서 정규식이라고 알랴줌.
// \d : 숫자만 사용되었는지 검증
// (?=) : ?=뒤에 오는 문자로 찾되 선택에서는 제외
// {n} : {n}개 인지 확인
// g : 문자열 전체에서 확인

console.log(solutionRP("01033334444"));
console.log(solutionRP("027778888"));
