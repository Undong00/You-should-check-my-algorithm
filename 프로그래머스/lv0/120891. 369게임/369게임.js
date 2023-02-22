function solution(order) {
    let a = /[3|6|9]/g;
    let b = [...order.toString().matchAll(a)].length;
    return b;
}