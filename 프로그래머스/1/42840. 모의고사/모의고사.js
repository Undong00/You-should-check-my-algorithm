function solution(answers) {
    let str1 = [1, 2, 3, 4, 5];
    let str2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let str3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let strCount1 = answers.filter((a,b)=> a === str1[b%str1.length]).length;
    let strCount2 = answers.filter((a,b)=> a === str2[b%str2.length]).length;
    let strCount3 = answers.filter((a,b)=> a === str3[b%str3.length]).length;
    
    let str123 = [];
    let mxstr = Math.max(strCount1, strCount2, strCount3);

    
    if(strCount1 === mxstr){
        str123.push(1)
    }
    if(strCount2 === mxstr){
        str123.push(2)
    }
    if(strCount3 === mxstr){
        str123.push(3)
    }
    
    
    return str123;
}

