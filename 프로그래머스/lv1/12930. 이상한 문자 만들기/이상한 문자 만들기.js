
function solution(s) {
    let Box = s.split(" ")  // ["try", "hello", "world"]
    let resultBox = []
    // let resultBox = ``
    for(let i=0; i < Box.length; i++){
        let innerBox =""
        for(let j=0; j < Box[i].length; j++){
            if(j%2 === 0){
                console.log(Box[i][j].toUpperCase())
                innerBox += Box[i][j].toUpperCase() // => T Y
                // innerBox += Box[i][j].toUpperCase() // => T Y
            } else {
                innerBox += Box[i][j].toLowerCase()  // r (만약 대문자면 소문자로)
            }
        } // "TrY"
        resultBox.push(innerBox)  // => ["TrY", "HeLlO", "WoRlD"]
    }
    return resultBox.join(" ")
    // return resultBox.reduce((prev, curv)=> {
    //     `${prev}, ${curv}`
    // })  // 정규 표현식 
}