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
        const n = s.length;
        const map = new Map();

        for(let c of s){
            if(!map.has(c)){
                map.set(c, 0);
            }
            let count = map.get(c);
            map.set(c, count + 1);
        }

        const maxHeap = new MaxPriorityQueue((x) => x.count );

        for(let [c, count] of map){
            if(count > Math.ceil(n / 2)) return ""
            maxHeap.enqueue({c, count});
        }


        let res = '';
        let prev = null;

        while(!maxHeap.isEmpty()){
            const curr = maxHeap.dequeue();
            res += curr.c;
            curr.count--;

            if(prev && prev.count > 0){
                maxHeap.enqueue(prev);
            }

            prev = curr;
        }

        return res;
    }
}
