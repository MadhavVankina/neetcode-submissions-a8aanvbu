/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    public boolean canAttendMeetings(List<Interval> intervals) {
        if(intervals.size() == 0 || intervals.size() == 1) return true;

       Collections.sort(intervals, Comparator.comparingInt(i -> i.start));
        
        int prevEnd = intervals.get(0).end;
        for(int i = 1; i < intervals.size(); i++){
            int currStart = intervals.get(i).start;
            int currEnd = intervals.get(i).end;

            if(currStart < prevEnd){
                return false;
            }else{
                prevEnd = currEnd;
            }
        }

        return true;
    }
}
