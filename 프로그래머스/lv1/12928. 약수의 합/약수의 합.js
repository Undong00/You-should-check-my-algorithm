
function solution(n) {
    let box = []
    for (let i= 0; i <= n; i++){
        if (n % i == 0  ) {
            box.push(i)
        }
       
    }
    return box.reduce((a,b)=>a+b,0)
}