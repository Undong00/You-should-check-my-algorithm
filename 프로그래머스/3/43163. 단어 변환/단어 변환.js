function solution(begin, target, words) {
    let visited = [];  // 방문한 단어를 기록하는 배열
    let q = [];        // BFS에 사용할 큐

    // target 단어가 words 배열에 없다면 변환 불가능하므로 0 반환
    if (!words.includes(target)) return 0;

    q.push([begin, 0]); // 큐에 시작 단어와 변환 횟수 0을 넣음

    while (q.length) { // 큐가 빌 때까지 반복
        let [word, count] = q.shift(); // 현재 단어와 변환 횟수 꺼내기

        if (word === target) return count; // 목표 단어에 도달했으면 변환 횟수 반환

        // words 배열 순회하면서 아직 방문하지 않았고 한 글자만 다른 단어를 찾음
        for (let i = 0; i < words.length; i++) {
            let next = words[i]; // 다음 검사할 단어

            // 아직 방문하지 않았고 한 글자만 다르면
            if (!visited.includes(next) && isOneLetterDiff(word, next)) {
                visited.push(next); // 방문 표시
                q.push([next, count + 1]); // 큐에 다음 단어와 변환 횟수 +1을 추가
            }
        }
    }

    // 큐가 다 돌 때까지 target에 도달하지 못한 경우 0 반환
    return 0;

    // 두 단어가 한 글자만 다른지 확인하는 함수
    function isOneLetterDiff(a, b) {
        let diff = 0; // 다른 글자 개수
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) diff++; // 다른 글자일 때마다 diff 증가
        }
        return diff === 1; // 딱 한 글자만 다르면 true
    }
}
