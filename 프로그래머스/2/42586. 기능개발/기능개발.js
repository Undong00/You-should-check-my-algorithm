function solution(progresses, speeds) {
    var answer = [];
    let day = progresses.map((p,i)=>Math.ceil((100-p)/speeds[i]));
    let maxDay = day[0];
    let cnt = 1;
    for(let i = 1; i<progresses.length; i++){
        if(day[i]<=maxDay){
        cnt++;
        }
        else{
            answer.push(cnt);
            maxDay = day[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}