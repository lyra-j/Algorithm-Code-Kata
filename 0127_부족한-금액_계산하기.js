//result = money-(price+ price*2 + price*3 + price*4)

function solution(price, money, count) {
  let nPrice = 0;
  let result = 0;

  for (let i = 1; i <= count; i++) {
    nPrice += price * i;
  }
  result = money - nPrice;
  return result < 0 ? -result : 0;
}

console.log(solution(3, 20, 4)); // 10
