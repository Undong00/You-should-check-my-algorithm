function solution(cipher, code) {
    return [...cipher].filter((a,b)=>(b+1)%code===0).join("")
}