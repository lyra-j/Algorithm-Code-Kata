// 1.

function solution(s){
  let P = s.toUpperCase().split("P").length;
  let Y = s.toUpperCase().split("Y").length;

  return P === Y ? true : false;
}

// 2. filter(다시 확인 답이 나오지 않음
function solution(s){
  let P = s.toUpperCase().filter(x => x === "P").length;
  let Y = s.toUpperCase().filter(y => y === "Y").length;

  return P === Y ? true : false;
}
