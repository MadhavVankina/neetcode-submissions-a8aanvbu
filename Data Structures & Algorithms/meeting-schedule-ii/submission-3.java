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
        int[] startArr = new int[intervals.size()];
        int[] endArr = new int[intervals.size()];

        for(int i = 0; i < intervals.size(); i++){
            startArr[i] = intervals.get(i).start;
            endArr[i] = intervals.get(i).end;
        }

        Arrays.sort(startArr);
        Arrays.sort(endArr);


        int s = 0;
        int e = 0;

        int count = 0;
        int max = 0;

        while(s < intervals.size()){
            if(startArr[s] < endArr[e]){
                count++;
                s++;
            }else{
                count--;
                e++;
            }

            max = Math.max(max, count);
        }

        return max;
    }
}
