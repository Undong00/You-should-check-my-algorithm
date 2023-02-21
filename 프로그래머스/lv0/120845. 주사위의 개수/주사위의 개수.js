function solution(box, n) {
    let box1 = Math.floor(box[0]/n);
    let box2 = Math.floor(box[1]/n);
    let box3 = Math.floor(box[2]/n);
    return box1*box2*box3;
}