function solution(s){
    let p = /p/gi
    let y = /y/gi
    let array1 = s.match(p)
    let array2 = s.match(y)
    if(!array1 && !array2){
        return true
    }else if(!array1 || !array2){
        return false
    }else if(array1.length === array2.length){
        return true
    }else{
        return false
    }
}