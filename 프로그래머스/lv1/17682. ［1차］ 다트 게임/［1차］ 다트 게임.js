function solution(dartResult) {
    let calculateBox = []
    let num = 0
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {  // 맨 앞자리 확인 0~9
            if (parseInt(dartResult[i]) === 1 && parseInt(dartResult[i + 1]) === 0) {
                // "10" 을 생각해봤을 때 왼쪽은 즉, i번째는 1이고  i+1번째는 0 이잖아요.
                num = 10;
                // 이게 포인트!!!
                i++ // 10 만들고 건너뛰기. 1 0   만약 i가 0번째였다?  i++ 하면 i가 1이 되겠죠? 또 i++  2가 됩니다.
            } else {
                num = dartResult[i]  // 0 ~ 9
            }
        } else if (dartResult[i] === "S") {
            calculateBox.push(num)  // num 은 현재 숫자!!! calculateBox는 현재 숫자를 가지고 계산한 박스 array
        } else if (dartResult[i] === "D") {
            calculateBox.push(Math.pow(num, 2))
        } else if (dartResult[i] === "T") {
            calculateBox.push(Math.pow(num, 3))
        } else if (dartResult[i] === "*") {  // 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
            if (i > 3) { // 맨 앞이 1 0 인 경우도 있으니까. 3 초과로 했음.
                calculateBox[calculateBox.length - 1] *= 2
                calculateBox[calculateBox.length - 2] *= 2  // 10S* 2T3S*   dfadf*
            } else {
                calculateBox[calculateBox.length - 1] *= 2  // calculateBox = [10**2, 2**3,]
            }
        } else if (dartResult[i] === "#") {
            calculateBox[calculateBox.length - 1] *= -1
        }
    }
    return calculateBox.reduce((prev, curv) => parseInt(prev) + parseInt(curv), 0)
}