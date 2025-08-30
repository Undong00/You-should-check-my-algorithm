class Solution {
    // 최대공약수 구하는 메서드
    public int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public int[] solution(int n, int m) {
        int gcd = gcd(n, m);               // 최대공약수
        int lcm = n * m / gcd;             // 최소공배수
        return new int[]{gcd, lcm};
    }
}
