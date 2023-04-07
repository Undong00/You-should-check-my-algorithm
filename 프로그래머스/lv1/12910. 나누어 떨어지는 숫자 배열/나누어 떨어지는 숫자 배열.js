function solution(arr, divisor) {
    let Box = arr.filter((ele)=> ele % divisor === 0)  // 조건을 만족하는 애들로 배열  []
    return Box.length ? Box.sort((a,b) => a-b) : [-1]
}