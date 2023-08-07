function solution(progresses, speeds) {
    const answer = [];

    while (progresses.length > 0) {
        // 작업 진도를 갱신
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];  
        }

        let count = 0; // 배포되는 작업 수

        // 완료된 작업 개수를 세기
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }

        if (count > 0) {
            answer.push(count);
        }
    }

    return answer;
}