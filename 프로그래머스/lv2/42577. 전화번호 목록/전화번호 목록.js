function solution(phone_book) {
  phone_book.sort(); // 전화번호를 오름차순으로 정렬합니다.
  
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false; // 다음 번호가 현재 번호의 접두사이면 false를 반환합니다.
    }
  }
  
  return true; // 접두사가 없는 경우 true를 반환합니다.
}