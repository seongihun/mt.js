// 4. 학생들의 점수 배열에서 평균을 구하는 함수를 만들어보세요
const scores = [85, 92, 78, 96, 88];
let j=0
function getAverage(scoreArray) {
    for(let i=0; i<scoreArray.length; i++){
      j=j+scoreArray[i];
    }  return j/scoreArray.length
}

console.log(getAverage(scores)); // 87.8이 출력되어야 함
