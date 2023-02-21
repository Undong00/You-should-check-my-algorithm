function solution(rsp) {
    let rspg = ''
   for(let i =0; i<rsp.length; i++){
       let ca = rsp.charAt(i);
       if(ca === "2"){
           rspg += "0"
       }
       else if(ca === "0"){
           rspg += "5"
       }
       else if(ca === "5"){
           rspg += "2"
       }  
   }
    return rspg
}