function solution(n) {
    let a = new Set();
    for(let i = 1; i<=n; i++){
        for(let j =2; j<i; j++){
            if(i%j==0){
                a.add(i)
            }
        }
        
    }
    return a.size
    
}