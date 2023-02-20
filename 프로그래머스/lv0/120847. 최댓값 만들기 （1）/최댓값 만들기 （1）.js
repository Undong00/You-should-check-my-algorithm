function solution(numbers) {
    let t = numbers.sort((a,b)=>b-a);
    return t[0] * t[1];
}