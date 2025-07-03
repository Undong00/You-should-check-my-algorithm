function solution(myString) {
    return myString
        .replace(/a/g, 'A')              // 모든 'a'를 'A'로 바꾸고
        .replace(/[B-Z]/g, (ch) => ch.toLowerCase());  // 'A'를 제외한 대문자만 소문자로
}
