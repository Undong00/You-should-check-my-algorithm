function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        const c = control[i];
        if (c === "w") {
            n += 1;
        } else if (c === "s") {
            n -= 1;
        } else if (c === "d") {
            n += 10;
        } else if (c === "a") {
            n -= 10;
        }
    }
    return n;
}
