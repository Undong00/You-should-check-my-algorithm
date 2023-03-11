function solution(sizes) {
    let e = Number.MIN_SAFE_INTEGER
    let r = Number.MIN_SAFE_INTEGER
    sizes.map((x)=>x.sort((a,b)=>a-b))
         .map((x)=>{
        e=Math.max(e,x[0])
        r=Math.max(r,x[1])
    })
    return e * r
}