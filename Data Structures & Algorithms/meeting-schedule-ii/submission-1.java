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
    public int minMeetingRooms(List<Interval> intervals) {

        if(intervals.size() <= 1){
            return intervals.size();
        }

        intervals.sort((a, b) -> a.start - b.start);
        
        int prevEnd = intervals.get(0).end;



        int res = 0;
        int max = 0;

        for(int i = 1; i < intervals.size(); i++){
            int start = intervals.get(i).start;
            int end = intervals.get(i).end;

            if(start < prevEnd){
                res++;
                prevEnd = Math.max(end, prevEnd); 
            }else{
                prevEnd = end;
            }
        } 

        return res;
    }
}
