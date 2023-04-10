function solution(new_id){
    // 1단계
    let stage1 = new_id.toLowerCase()
    // -_.~!@#$%&*()=+[{]}:?,<>/  > a > "^" > Z 
    // 2단계
    stage1 = [...stage1].filter((ele,idx)=>{
        if(ele >= "a" && ele <= "z"){
            return true  // 소문자 살려
        } else if(isNaN(ele)===false){
            return true
        } else if(ele === "-"){
            return true
        } else if(ele === "_"){
            return true
        } else if(ele === "."){
            return true
        }
    })

    console.log(stage1)

    stage1 = stage1.join("")
    console.log(stage1)



    // 3 단계
    let stage3 = stage1.replace(/\.\.+/g, ".")
    console.log(stage3)


    // ^  : start
    // $  : end
    // |  : or 
    // \ : 특수문자 앞에 씀.   . 은 정규표현식에서 특수문자임
    // ^\.  : 시작 부분 .
    // \.$  : 끝나는 부분 .

    // 4단계
    // console.log(".bat.y.abcdefghijklm.".replace(/^\.|\.$/g, ""))  // 문제없음 >>> bat.y.abcdefghijklm
    let stage4 = stage3.replace(/^\.|\.$/g, "")
    console.log(stage4)

    // 5단계
    let stage5 = stage4.length? stage4 : "a"
    console.log(stage5)

    // 6단계
    let stage6 = [...stage5].filter((ele, idx)=> idx < 15)  // 15개만 살림.
    console.log(stage6)

    stage6 = stage6.join("").replace(/\.$/, "")
    console.log(stage6)

    // 7단계
    while(stage6.length <= 2){
        stage6 += stage6[stage6.length-1]
    }
    console.log(stage6)
    return stage6
}