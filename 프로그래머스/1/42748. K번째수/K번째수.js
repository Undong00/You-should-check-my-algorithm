function solution(array, commands) {
    return commands.map(([i,j,k])=> {
        let sliced = array.slice(i-1,j);
        let sorted = sliced.sort((a,b) =>a-b);
        return sorted[k-1];     
    })
}
                        
            