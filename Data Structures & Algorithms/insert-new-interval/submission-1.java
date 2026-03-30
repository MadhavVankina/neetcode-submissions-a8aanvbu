class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {

        List<int[]> res = new ArrayList<>();

        if(intervals.length == 0){
            return new int[][]{ {newInterval[0], newInterval[1]}};
        }

        int i = 0;
        while(i < intervals.length){
            if(newInterval[1] < intervals[i][0]){
               res.add(new int[]{newInterval[0], newInterval[1]});
                while(i < intervals.length){
                    res.add(intervals[i]);
                    i++;
                }
                return res.toArray(new int[res.size()][]);
            }else if(newInterval[0] > intervals[i][1]){
                res.add(intervals[i]);
            }else{
                newInterval = new int[]{Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])};
            }
            i++;   
        }

        res.add(newInterval);

        return res.toArray(new int[res.size()][]);
    }
}
