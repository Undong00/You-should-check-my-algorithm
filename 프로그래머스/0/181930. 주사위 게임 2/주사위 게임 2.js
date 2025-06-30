function solution(a, b, c) {
    var answer = 0;
    for(let i = 0; i<3; i++){
     if (a === b && b === c) {
        // 세 숫자가 모두 같을 때
        return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    } else if (a === b || b === c || a === c) {
        // 두 숫자만 같을 때
        return (a + b + c) * (a**2 + b**2 + c**2);
    } else {
        // 모두 다를 때
        return a + b + c;
    }
        
    }
    return answer;
}