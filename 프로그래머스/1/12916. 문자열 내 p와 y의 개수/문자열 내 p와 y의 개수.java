class Solution {
    boolean solution(String s) {
        String str = s.toLowerCase();
        int pCount = 0;
        int yCount = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'p') {
                pCount++;
            } else if (str.charAt(i) == 'y') {
                yCount++;
            }
        }
        return pCount == yCount;
    }
}
