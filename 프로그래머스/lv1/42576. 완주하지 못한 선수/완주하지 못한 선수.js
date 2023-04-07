function solution(participant, completion) {
    let a = participant.sort()
    let b = completion.sort()
    for (let i = 0; i < participant.length; i++){
        if(a[i]!==b[i]){
            return a[i]
        }
    }
}