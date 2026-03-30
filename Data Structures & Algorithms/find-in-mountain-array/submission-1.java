/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 *     public int get(int index) {}
 *     public int length() {}
 * }
 */

class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int len = mountainArr.length();
        int l = 0;
        int r = len - 1;

        int peek = 0;

        while(l <= r){
            int m = (l + r) / 2;
            int mid = mountainArr.get(m);
            int midl = mountainArr.get(m - 1);
            int midr = mountainArr.get(m + 1);

            if(midl < mid && mid < midr){
                l = m + 1;
            }else if(midl > mid && mid > midr){
                r = m - 1;
            }else{
                peek = m;
                break; 
            }
        }

        // left portion
        l = 0;
        r = peek;

        while(l <= r){
            int m = (l + r) / 2;
            int mid = mountainArr.get(m);
            if(mid == target) return m;

            if(mid < target){
                l = m + 1;
            }else{
                r = m - 1;
            }
        }

        l = peek;
        r = len - 1;

        while(l <= r){
            int m = (l + r) / 2;
            int mid = mountainArr.get(m);
            if(mid == target) return m;

            if(mid > target){
                l = m + 1;
            }else{
                r = m - 1;
            }
        }

        return -1;
    }
}