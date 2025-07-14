function solution(n_str) {
    let arr = n_str.split('');
    while (arr[0] === '0') {
        arr.shift();
    }
    return arr.join('');
}
