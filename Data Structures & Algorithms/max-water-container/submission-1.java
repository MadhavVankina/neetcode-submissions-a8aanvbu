class Solution {
    public int maxArea(int[] heights) {
        int l = 0;
        int r = heights.length - 1;
        int max = 0;

        while(l < r){
            if(heights[l] < heights[r]){
                max = Math.max(max,heights[l] * (r - l));
                l++;
            }else{
                max = Math.max(max,heights[r] * (r - l));
                r--;
            }
        }

        return max;
    }
}
