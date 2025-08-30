import java.util.Arrays;

public class Solution {
    public int solution(int[] d, int budget) {
        Arrays.sort(d); // 오름차순 정렬
        int count = 0;

        for (int i = 0; i < d.length; i++) {
            if (budget >= d[i]) {
                budget -= d[i];
                count++;
            } else {
                break;
            }
        }

        return count;
    }
}