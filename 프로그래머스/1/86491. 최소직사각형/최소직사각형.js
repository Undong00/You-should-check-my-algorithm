function solution(sizes) {
  let w = 0;
  let h = 0;
    sizes.map((x)=>x.sort((a,b)=>a-b)).map((x)=>{
        w = Math.max(w,x[0]);
        h = Math.max(h,x[1]);
    })
    return w*h
}

         

