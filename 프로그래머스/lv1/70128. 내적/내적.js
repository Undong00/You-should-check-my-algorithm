function solution(a, b) {
    let Box = a.map((ele, i) => ele * b[i])  // 재탄생된 a
    return  Box.reduce((prev, curv)=> prev + curv)
    let result = 0;
} 