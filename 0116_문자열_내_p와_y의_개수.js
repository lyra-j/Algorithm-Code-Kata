// 1. split
function solution(s) {
  let P = s.toUpperCase().split("P").length;
  let Y = s.toUpperCase().split("Y").length;

  return P === Y ? true : false;
}

// 2. filter
function solution(s) {
  const strArr = s.toLowerCase().split("");
  const p = strArr.filter((str) => str === "p").length;
  const y = strArr.filter((str) => str === "y").length;
  return p === y ? true : false;
}

//3.
function numPY(s) {
  let result = true;
  s = s.toUpperCase();
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") num++;
    if (s[i] === "Y") num--;
  }
  result = num === 0;

  return result;
}
