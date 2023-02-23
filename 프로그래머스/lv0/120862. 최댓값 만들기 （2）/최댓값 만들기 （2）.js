function solution(numbers) {
    let a = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<numbers.length; j++){
            if(i!==j){
                a.push(numbers[i]*numbers[j]);
            }
        }
     
    }
     return Math.max(...a)
}