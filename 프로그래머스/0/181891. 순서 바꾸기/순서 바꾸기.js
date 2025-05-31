function solution(num_list, n) {
  const front = num_list.slice(n);     // n번째 이후의 원소들
  const back = num_list.slice(0, n);   // 0번째부터 n-1번째까지의 원소들
  return front.concat(back);           // 앞부분과 뒷부분을 이어붙임
}
