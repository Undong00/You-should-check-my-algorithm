function solution(numbers, n) {
    let num = 0;
    for(let i = 0; i<numbers.length; i++){
        num += numbers[i];
        if(num > n){
            return num; 
        }
    }
}