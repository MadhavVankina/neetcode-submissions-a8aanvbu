class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    // [ab, ba, bd, cc, cd]
    // a -> b -> c
    //   \> d />

    // a: [b, d] | b: [c] | c: [] | d: [c]
    // Edge cases:
    // h <-> e (cycle) => false
    // ["abc","ab"] => false

    // h -> e -> r || n -> f || a
    foreignDictionary(words) {
        const adj = {};

        for (let word of words) {
            for (let c of word) {
                if (!adj[c]) adj[c] = new Set();
            }
        }

        for (let i = 1; i < words.length; i++) {
            const [w1, w2] = [words[i - 1], words[i]];
            let minWord = Math.min(w1.length, w2.length);
            if ((w1.length > w2.length) && (w1.slice(0, minWord) == w2.slice(0, minWord))) {
                return "";
            }

            for (let j = 0; j < minWord; j++) {
                if (w1[j] !== w2[j]) {
                    adj[w1[j]].add(w2[j]);
                    break;
                }
            }
        }

        const visit = {};
        const result = [];

        const dfs = (c) => {
            if (c in visit) return visit[c]; // Returns false if cycle detected, true if already processed

            visit[c] = false; // Mark node as currently in call stack

            for (let nei of adj[c]) {
                if (!dfs(nei)) return false; // Cycle detected in recursion
            }

            visit[c] = true; // Mark node as fully processed
            result.push(c);
            return true;
        };

        for (let c in adj) {
            if (!dfs(c)) return ""; // Return empty string if a cycle exists
        }

        // Fixed: Standard .reverse() method
        return result.reverse().join('');
    }
}
