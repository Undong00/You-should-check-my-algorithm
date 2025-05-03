function solution(numbers) {
    let splitnum = numbers.split("");
    let set = new Set();
    
    const makedecimal = (arr, current) => {
        if (current.length > 0) {
            set.add(parseInt(current));
        }
        for (let i = 0; i < arr.length; i++) {
            let next = arr.slice(); // 수정: slice()로 복사
            next.splice(i, 1);
            makedecimal(next, current + arr[i]);
        }
    };
    makedecimal(splitnum, "");
    
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) { // 수정: sqrt
            if (n % i === 0) return false;
        }
        return true;
    }
    
    let count = 0;
    for (let num of set) {
        if (isPrime(num)) count++;
    }
    return count;
}
