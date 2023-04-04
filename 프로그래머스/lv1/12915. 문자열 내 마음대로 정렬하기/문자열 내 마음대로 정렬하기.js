function solution(strings, n) {
    let result = [];

		// 문자열 가장앞 글자 붙인 문자 배열 만들기
    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i][n] + strings[i];
    }

		// 문자열 사전순 정렬
    strings.sort();

		// 앞글자 제거 후 리턴
    for(let j = 0; j < strings.length; j ++) {
      strings[j] = strings[j].replace(strings[j][0],"");
      result.push(strings[j]);
    }

    return result;
}