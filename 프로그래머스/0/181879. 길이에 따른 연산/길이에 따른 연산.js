function solution(num_list) {
    let n;
    if (num_list.length > 10) {
        n = 0;  // 덧셈
        for (let i = 0; i < num_list.length; i++) {
            n += num_list[i];
        }
    } else {
        n = 1;  // 곱셈
        for (let i = 0; i < num_list.length; i++) {
            n *= num_list[i];
        }
    }
    return n;
}
