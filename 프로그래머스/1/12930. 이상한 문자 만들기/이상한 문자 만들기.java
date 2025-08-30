class Solution {
    public String solution(String s) {
        String[] str = s.split("");
        int index = 0;
        for(int i = 0; i < str.length; i++){
            if(str[i].equals(" ")){
                index = 0; 
                continue;
            }
            if(index % 2 == 0){
                str[i] = str[i].toUpperCase();
            } else {
                str[i] = str[i].toLowerCase();
            }
            index++;
        }
        return String.join("", str);
    }
}
