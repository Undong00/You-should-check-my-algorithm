function solution(my_string) {
    const z = /[^0-9]/g; // 정규 표현식 
    const x=  my_string.replace(z, "").split("").reduce((a,b) =>Number(a)+Number(b))
    return x
    
}