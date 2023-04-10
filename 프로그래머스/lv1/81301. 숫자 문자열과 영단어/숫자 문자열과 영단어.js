function solution(s) {
    // 영단어 배열을 만듦 일종의 사전.(여기서 찾을거임)
    let Dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    // s는 문자열    "one4seveneight"
    for(let i=0; i<Dict.length; i++){
        s = s.replaceAll(Dict[i], i)
    }
    return parseInt(s)
}