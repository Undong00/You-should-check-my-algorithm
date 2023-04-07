function solution(n) {
    let a = n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b),0); // 숫자는 스플릿이 안된다.
    return a
   

}