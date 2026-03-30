class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const n = s.length
        const map = new Map()

        for(let c of s){
            if(!map.has(c)){
                map.set(c, 0)
            }

            const count = map.get(c) + 1
            if(count > Math.ceil(n/2)){
                return ""
            }

            map.set(c, count)
        }

        const pq = new MaxPriorityQueue((x) => x.count)

        for(let [c, count] of map){
            pq.enqueue({c, count})
        }

        let res = ''
        let prev = null // very important

        while(!pq.isEmpty()){
            const curr = pq.dequeue()
            res += curr.c
            curr.count--

            if(prev && prev.count > 0){
                pq.enqueue(prev)
            }

            prev = curr
        }

        return res
    }
}
