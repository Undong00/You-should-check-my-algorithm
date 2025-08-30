class Solution {
    public int[] solution(int[] arr) {
        // 원소가 하나라면 [-1] 리턴
        if (arr.length == 1) {
            return new int[]{-1};
        }

        // 제일 작은 수 찾기
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        // 가장 작은 수를 뺀 새 배열 만들기
        int[] answer = new int[arr.length - 1];
        int idx = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != min) {
                answer[idx] = arr[i];
                idx++;
            }
        }

        return answer;
    }
}
