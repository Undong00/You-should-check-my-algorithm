function solution(absolutes, signs) {
    let n = 0; 
    for(let i= 0; i<signs.length; i++){
        n += absolutes[i] * (signs[i] ? 1 : -1)
        
        
        }
    return n;
    }
