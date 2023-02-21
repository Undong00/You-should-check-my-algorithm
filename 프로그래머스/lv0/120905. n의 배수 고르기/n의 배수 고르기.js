function solution(n, numlist) {
    let a = [];
     for(let i = 0; i<numlist.length; i++){
         if(numlist[i]%n===0){
             a.push(numlist[i])
         }
     }
    return a;
}