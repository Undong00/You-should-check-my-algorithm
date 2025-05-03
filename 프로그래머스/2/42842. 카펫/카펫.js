function solution(brown, yellow) {
    let total = brown + yellow;
    for(let height = 3; height <= total; height++){
        let width = total/height;
        if(width % 1!== 0)continue;
          if ((width - 2) * (height - 2) === yellow) {
            return [width, height];
        }
    }
}