function solution(n, k) {
    var answer = [];
    for(let i = 0; i<=n; i++){
        if(i%k==0 && i != 0){
            answer.push(i)
        }
    }
    return answer;
}