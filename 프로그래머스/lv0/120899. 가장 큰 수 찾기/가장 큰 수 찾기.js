function solution(array) {
    let a =  Math.max(...array);
    let b = array.indexOf(Math.max(...array))
    return [a,b];
    
    
}