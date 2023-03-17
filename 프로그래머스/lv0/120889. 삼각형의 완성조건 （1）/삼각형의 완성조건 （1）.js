function solution(sides) {
    let e = sides.sort((a,b)=>a-b);
    let g = sides[2]<(sides[0]+sides[1])?1:2;
    return g;
}