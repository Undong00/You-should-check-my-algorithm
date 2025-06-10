function solution(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i], 10); // 각 자리 숫자를 더함
    }
    return sum % 9; // 9로 나눈 나머지 반환
}
