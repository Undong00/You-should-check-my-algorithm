function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    function dfs(computer){
        visited[computer] = true;
        for(let i = 0; i<n; i++){
            if(!visited[i] && computers[computer][i] === 1){
                dfs(i);
            }
        }
    }
        for(let i = 0; i<n; i++){
            if(!visited[i]){
                dfs(i);
                answer++;
            }
        }
    
    return answer;
}