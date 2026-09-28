class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    
    // ["bat","bag","sag","dag","dot", "gat"]

    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) return 0;

        const patternAdjMap = {};

        for(let word of [...wordList, beginWord]){
            for(let i = 0; i < word.length; i++){
                const pattern = word.substring(0, i) + '*' + word.substring(i + 1); 
                if(!patternAdjMap[pattern]){
                    patternAdjMap[pattern] = [];
                }

                patternAdjMap[pattern].push(word);
            }
        }

        const q = new Queue();
        q.push(beginWord);
        const visited = new Set();
        visited.add(beginWord);

        let result = 1;

        while(!q.isEmpty()){
            let size = q.size();

            for(let s = 0; s < size; s++){
                const word = q.pop();
                if(word == endWord) return result;

                for(let i = 0; i < word.length; i++){
                    const pattern = word.substring(0, i) + '*' + word.substring(i + 1); 

                    for(let nei of patternAdjMap[pattern]){
                        if(!visited.has(nei)){
                            visited.add(nei);
                            q.push(nei);
                        }
                    }
                }
            }

            result++;
        }

        


        return 0;

    }
}
