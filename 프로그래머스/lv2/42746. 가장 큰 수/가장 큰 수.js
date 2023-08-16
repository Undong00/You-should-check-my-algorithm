function solution(numbers) {
    const sort = numbers.map(num => num.toString()).sort((a, b) => (b + a) - (a + b));
    const answer = sort.join('');

    return answer[0] === '0' ? '0' : answer;
}