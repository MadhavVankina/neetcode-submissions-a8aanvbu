class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */

    // [b - 4, a - 3 , c - 2]
    // b [a, b, c]
    // ba [b, a, c]
    // bab [a, b, c]
    // baba [b, c, a]
    // babab [c, a, b]
    // bababc [a, b, c]
    // bababcabc

    // a = 0, b = 1, c = 5
    // c
    // cc
    // ccb
    // ccbc
    // ccbcc

    longestDiverseString(a, b, c) {
        const pq = new PriorityQueue((a, b) => b[1] - a[1]);
        if (a > 0) pq.enqueue(["a", a]);
        if (b > 0) pq.enqueue(["b", b]);
        if (c > 0) pq.enqueue(["c", c]);

        const res = [];

        while (!pq.isEmpty()) {
            let [c, count] = pq.dequeue();
            const rLen = res.length;
            if (rLen > 1 && res[rLen - 1] === c && res[rLen - 2] === c) {
                if (pq.isEmpty()) break;

                let [nC, nCount] = pq.dequeue();
                res.push(nC);
                nCount--;
                if (nCount > 0) pq.enqueue([nC, nCount]);
            } else {
                res.push(c);
                count--;
            }

            if (count > 0) {
                pq.enqueue([c, count]);
            }
        }

        return res.join("");
    }
}
