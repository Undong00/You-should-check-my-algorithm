function solution(arr){
    let box = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!=arr[i+1]){
            box.push(arr[i])
        }
    }
    return box;
}
