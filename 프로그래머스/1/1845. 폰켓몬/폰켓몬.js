function solution(nums) {
    let num = nums.length/2;
    let newSet = new Set(nums);
    
    return [...newSet].filter((a,b)=>b<num).length
    
}

