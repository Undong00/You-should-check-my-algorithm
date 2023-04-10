function solution(s) {
    // return   [...s].sort((a,b)=>{
    //     if()  return 1
    //       return -1
    //       return 0
    // }).join("")
    return [...s].sort().reverse().join("")
}