function solution(priorities, location) {
    let array = [];
    let q = priorities.map((p,i) => ({p,i}));
    while(q.length > 0){
        let c = q.shift();
        if (q.some(item => item.p > c.p)) {
            q.push(c);
        }
        else{
        array.push(c.i);
        }
    }
    return array.indexOf(location)+1;
}