class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> res = new ArrayList<>();

        if(intervals.length == 1){
            return intervals;
        }

        int i = 1;
        int[] prev = intervals[0];
        while(i < intervals.length){
            int[] curr = intervals[i];
            if(prev[1] < curr[0]){
                res.add(prev);
                prev = curr;
            }else{
                prev = new int[]{Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])};
            }
            i++;
        }

        res.add(prev);

        return res.toArray(new int[res.size()][]);
    }
}
