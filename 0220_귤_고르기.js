function solution(k, tangerine) {
  var freq = new Map();

  //귤 빈도수 체크
  for (let i = 0; i < tangerine.length; i++) {
    const target = freq.get(tangerine[i]);
    freq.set(tangerine[i], target ? target + 1 : 1);
  }

  // 빈도수 내림차순
  const value = Array.from(freq.values()).sort((a, b) => b - a);
  let count = 0;

  // 
  for (let i = 0; i < value.length; i++) {
    if (k <= 0) break;

    k -= value[i];
    count++;
  }
  return count;
}
