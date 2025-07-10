function solution(myString, pat) {
    // A <-> B 변환
    let converted = '';
    for (let i = 0; i < myString.length; i++) {
        converted += myString[i] === 'A' ? 'B' : 'A';
    }
    
    // 포함 여부 확인
    return converted.includes(pat) ? 1 : 0;
}