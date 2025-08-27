import java.util.Arrays;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        // 정렬 (앞뒤 번호 순서대로 처리해야 그리디 가능)
        Arrays.sort(lost);
        Arrays.sort(reserve);
        // 1. 겹치는 학생 먼저 제거
        for (int i = 0; i < lost.length; i++) {
            for (int j = 0; j < reserve.length; j++) {
                if (lost[i] == reserve[j]) {
                    lost[i] = -1;      // 표시: 처리됨
                    reserve[j] = -1;   // 표시: 처리됨
                    break;
                }
            }
        }
        // 2. 빌리기 처리
        for (int i = 0; i < lost.length; i++) {
            if (lost[i] == -1) continue; // 이미 해결된 학생은 패스

            for (int j = 0; j < reserve.length; j++) {
                if (reserve[j] == -1) continue; // 이미 사용한 여벌은 패스

                if (reserve[j] == lost[i] - 1 || reserve[j] == lost[i] + 1) {
                    reserve[j] = -1; // 빌려줬으니 사용 처리
                    lost[i] = -1;    // 체육복 받았으니 처리 완료
                    break;
                }
            }
        }
        // 3. 수업 들을 수 있는 학생 수 = 전체 - 아직도 잃어버린 학생 수
        int answer = n;
        for (int l : lost) {
            if (l != -1) answer--;
        }
        return answer;
    }
}
