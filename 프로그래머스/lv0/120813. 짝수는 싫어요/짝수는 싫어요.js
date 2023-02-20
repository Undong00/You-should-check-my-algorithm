function solution(n) {
    let num = [];
    for(let i = 0; i<n+1; i++){
        if(i%2!=0){
            num.push(i)
        }
    }
    return num;
}