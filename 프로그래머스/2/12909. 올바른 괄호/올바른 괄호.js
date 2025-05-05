function solution(s){
    let numbers = 0;
    if(s[0]==")")return false;
    for(let i = 0; i<s.length; i++){
        (s[i]==="(") ? numbers+=1 : numbers-=1;
        if(numbers<0)return false;
    }
    return numbers === 0;
}