class Solution {
    public boolean solution(String s) {
        String[] str = s.split("");
        boolean answer = true;
        
        if (str.length != 4 && str.length != 6) {
            return false;
        }
        
        for (int i = 0; i < str.length; i++) {
            if (!Character.isDigit(str[i].charAt(0))) {
                answer = false;
                break;
            }
        }
        
        return answer;
    }
}
