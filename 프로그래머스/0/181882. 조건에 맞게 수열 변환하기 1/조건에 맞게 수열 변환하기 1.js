function solution(arr) {
    let box = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 === 0) {
            box.push(arr[i] / 2);
        } else if (arr[i] < 50 && arr[i] % 2 === 1) {
            box.push(arr[i] * 2);
        } else {
            box.push(arr[i]); 
        }
    }
    return box;
}
