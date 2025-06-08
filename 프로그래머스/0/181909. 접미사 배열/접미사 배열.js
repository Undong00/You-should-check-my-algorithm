function solution(my_string) {
    let suffixes = [];

    // 모든 접미사 생성
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.slice(i));
    }

    // 사전순 정렬
    return suffixes.sort();
}
