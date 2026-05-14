class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    
    // ----- Base Case -----
    /*  
        -   if any character appearing more than 
            half the times the return ""
    */

    // ---- Logic ----
    /* 
        -   its best to start with the highest count 
            char first
        -   Could you the over logic and keep pushing the
            char with highest count in the string / array
    */

    reorganizeString(s) {
        const maxHeap = new PriorityQueue((a, b) => b[1] - a[1]);

        const cMap = new Map();

        for(let c of s){
            if(!cMap.get(c)){
                cMap.set(c, 0)
            }
            let count = cMap.get(c) + 1;
            if(count > s.length/2){
                return "";
            }
            cMap.set(c, count);

        }

        for (const [key, value] of cMap) {
            maxHeap.enqueue([key, value]);
        }

        let res = '';
        while(maxHeap.size()){
            let [c, count] = maxHeap.dequeue();
            res += c;
            count--;
            if(count  > 0){
                maxHeap.push([c, count]);
            }
        }

        return res;
    }
}
