function solution(s) {
  let words = s.split(" ");
  let newWords = words.map((w) => {
    let temp = "";
    for (let i = 0; i < w.length; i++) {
      i % 2 === 0 ? (temp += w[i].toUpperCase()) : (temp += w[i].toLowerCase());
    }
    return temp;
  });

  return (answer = newWords.join(" "));
}

// function solution(s) {
//   let answer = "";

//   for (let word of s.split(" ")) {
//     for (let i in word) {
//       answer +=
//         word[i][parseInt(i) % 2 === 0 ? "toUpperCase" : "toLowercase"]();
//     }

//   }
//   return answer;
// }
