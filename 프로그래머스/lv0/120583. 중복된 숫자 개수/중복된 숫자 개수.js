function solution(array, n) {
    let a = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] == n){
            a +=1 ;
            
        }
    }
    return a;
}