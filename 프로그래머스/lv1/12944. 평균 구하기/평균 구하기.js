
function solution(arr) {
    let result = 0
    for (let a of arr){
        result += a
    }
    return result / arr.length
}