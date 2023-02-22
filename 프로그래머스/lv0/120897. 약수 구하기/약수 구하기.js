function solution(n) {
    let a = []
    for(let i =0; i<n+1;i++){
        if(n%i === 0){
            a.push(i);
        }
    }
    return a
}