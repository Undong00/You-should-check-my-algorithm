function solution(my_string) {
    const RexExp = /[a,e,i,o,u]/g
    return my_string.replace(RexExp, "")
}