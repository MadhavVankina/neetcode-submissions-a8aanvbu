class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int l = 1;
        int r = 0;

        for(int p : piles){
            r = Math.max(r, p);
        }

        int res = r;

        while(l <= r){
            int m = l + (r - l) / 2;
            if(canEat(piles, h, m)){
                res = m;
                r = m - 1;
               
            }else{
                l = m + 1;
            }
        }

        return res;
        
    }

    private boolean canEat(int[] piles, int h, int m){
        int currH = 0;
        for(int p : piles){
            currH += Math.ceil((double) p / m);

            if(currH > h){
                return false;
            }
        }

        return true;
    }
}
