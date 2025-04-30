function solution(clothes) {
    let clothesMap = {};
    for(const [name,type] of clothes){
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }
    let combinations = 1;
    for(const type in clothesMap){
        combinations *= (clothesMap[type]+1);
    }
    return combinations - 1;  
}


    
    