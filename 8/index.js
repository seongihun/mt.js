// 8. 배열에서 가장 큰 숫자를 찾는 함수를 만들어보세요.

function findMax(numbers) {
  let max=numbers[0]
  for(let i=1;i<numbers.length; i++){
    if(numbers[i]>max){
      max=numbers[i];
    }
  }
  return max
}

console.log(findMax([3, 7, 2, 9, 1])); // 9가 출력되어야 함
