function solution(myString) {
    let ap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    let result = '';

    for (let ee = 0; ee < myString.length; ee++) {
        let ch = myString[ee];
        if (ap.includes(ch)) {
            result += 'l';
        } else {
            result += ch;
        }
    }

    return result;
}
