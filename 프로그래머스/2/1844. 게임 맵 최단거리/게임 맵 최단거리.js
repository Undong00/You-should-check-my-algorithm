function solution(maps) {
    const n = maps[0].length;
    const m = maps.length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let queue = [[0, 0, 1]];
    let front = 0; // 큐 인덱스

    while (front < queue.length) {
        const [x, y, dist] = queue[front++];

        if (x === m - 1 && y === n - 1) return dist;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < m && ny < n && maps[nx][ny] === 1) {
                maps[nx][ny] = 0; // 방문 체크
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}
