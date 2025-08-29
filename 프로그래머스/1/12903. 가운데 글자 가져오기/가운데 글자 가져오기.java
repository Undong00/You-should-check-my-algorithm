class Solution {
    public String solution(String s) {
        int len = s.length();

        if (len % 2 == 0) { // 짝수 길이
            char first = s.charAt(len / 2 - 1);
            char second = s.charAt(len / 2);
            return "" + first + second; // 문자열로 변환
        } else { // 홀수 길이
            char middle = s.charAt(len / 2);
            return String.valueOf(middle);
        }
    }
}
