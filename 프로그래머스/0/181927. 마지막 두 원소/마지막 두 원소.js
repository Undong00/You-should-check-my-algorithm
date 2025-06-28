function solution(num_list) {
    const len = num_list.length;
    const last = num_list[len - 1];
    const secondLast = num_list[len - 2];

    if (last > secondLast) {
        num_list.push(last - secondLast);
    } else {
        num_list.push(last * 2);
    }

    return num_list;
}
