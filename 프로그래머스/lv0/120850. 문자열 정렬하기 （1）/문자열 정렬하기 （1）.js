function solution(my_string) {
    let a = /d/g
    return my_string.split('').filter((x)=>x.match(/\d/)).map((x)=>parseInt(x))
}