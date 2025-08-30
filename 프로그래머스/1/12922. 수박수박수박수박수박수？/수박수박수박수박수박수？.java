class Solution {
    public String solution(int n) {
        String answer = "";
        int ans = 0;

        for(int i = 0; i < n; i++){
            ans++;
            if(ans%2 == 1){
                answer += "수";
            }
            else{
                answer += "박";
            }
        }
        return answer;
    }
}