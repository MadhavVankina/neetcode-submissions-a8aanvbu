class Solution {
    public int[] minInterval(int[][] intervals, int[] queries) {
        // sort the intervals with the first value of subarray
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        int[] res = new int[queries.length];

        int index = 0;

        for(int q : queries){
            int min = Integer.MAX_VALUE;
            for(int[] interval : intervals){
                if(q >= interval[0] ){
                    if(q <= interval[1]){
                        int len = interval[1] - interval[0] + 1;
                        min = Math.min(len, min); 
                    }
                   
                }else{
                    break;
                }
            }

            if(min == Integer.MAX_VALUE){
                res[index] = -1;
            }else{
                res[index] = min;
            }
            index++;
        }

        return res;

    }
}
