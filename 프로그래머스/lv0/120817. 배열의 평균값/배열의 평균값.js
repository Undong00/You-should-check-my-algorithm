function solution(numbers) {
    let a = 0;
       for(let i =0; i<numbers.length; i++){
           a += numbers[i];
       }
    return a/numbers.length;
}