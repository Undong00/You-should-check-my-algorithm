import java.util.*;

public class Solution {
    public int[] solution(int[] arr) {
        List<Integer> list = new ArrayList<>();
        int prev = -1; // arr 값은 0~9라서 초기값 -1 사용

        for (int i = 0; i < arr.length; i++) {
            if (i == 0 || arr[i] != prev) {
                list.add(arr[i]);
            }
            prev = arr[i];
        }

        return list.stream().mapToInt(i -> i).toArray();
    }
}
