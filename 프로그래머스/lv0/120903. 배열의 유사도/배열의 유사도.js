function solution(s1, s2) {
    let c = 0;
    for(let i = 0; i<s1.length; i++){
        for(let j = 0; j<s2.length; j++){
            if(s1[i]===s2[j]){
                c += 1;
            }
        }
    }
    return c;
}