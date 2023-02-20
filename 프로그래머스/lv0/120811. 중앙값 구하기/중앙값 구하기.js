function solution(array) {
    let g = array.sort((a,b) => a-b)
    return g[parseInt(array.length/2)]
}