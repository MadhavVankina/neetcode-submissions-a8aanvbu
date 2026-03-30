class Solution {
    public int maxArea(int[] heights) {
        int max = 0;

        int width = heights.length - 1;

        int l = 0;
        int r = heights.length - 1;

        while(l < r){
            int len = Math.min(heights[l], heights[r]);
            max = Math.max(max, width*len);

            if(heights[l] < heights[r]){
                l++;
            }else{
                r--;
            }

            width--;
        }

        return max;
    }
}
