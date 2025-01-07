  function solution(arr) { 
    // 배열의 요소가 1개인경우 그 값이 최소값이되므로 제거하면 요소는 0개가 된다. 그래서 배열의 길이가 1보다 작거나 같은 경우로 조건을 주고 [-1]을 리턴
    if(arr.length <= 1){
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
        return arr;
    }
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
