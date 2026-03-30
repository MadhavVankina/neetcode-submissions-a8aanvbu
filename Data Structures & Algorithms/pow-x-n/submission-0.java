class Solution {
    public double myPow(double x, int n) {
        double res = helper(x, Math.abs(n));
        return n < 0 ? 1/res : res;
    }

    private double helper(double x, int n){
        if(x == 0){
            return 0;
        }

        if(n == 0){
            return 1;
        }

        double res = helper(x, n/2);
        res *= res;
        return n % 2 != 0 ? x * res : res;
    }
}
