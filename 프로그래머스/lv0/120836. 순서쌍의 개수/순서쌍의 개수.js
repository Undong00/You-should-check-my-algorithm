function solution(n) {
    let g = 0;
    for(let i = 1; i<n+1; i++){
        if(n%i===0){
            g+=1;
        }
    }
    return g
}