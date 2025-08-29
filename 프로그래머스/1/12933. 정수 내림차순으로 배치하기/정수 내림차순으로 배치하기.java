import java.util.Arrays;
import java.util.Collections;

class Solution {
    public long solution(long n) {
        String[] digits = Long.toString(n).split("");
        Arrays.sort(digits, Collections.reverseOrder());
        long answer = Long.parseLong(String.join("", digits));
        return answer;
    }
}
