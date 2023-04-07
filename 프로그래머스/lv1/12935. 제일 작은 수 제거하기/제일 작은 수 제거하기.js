function solution(n) {
    let min = Math.min(...n)  // 1      얘의 위치를 찾아야 함. filter  !min === ele
    if (n.length > 1) {
        let idx = n.indexOf(min) // 원본을 바꾸는 메서드
        n.splice(idx,1)
        return n
    } else {
        return [-1]
    }
}
