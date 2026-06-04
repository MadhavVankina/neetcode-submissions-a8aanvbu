class Node {
    constructor() {
        this.next = {}
        this.isEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        const letters = word.split('')
        let curr = this.root

        for(let c of letters){
            if(!curr.next[c]){
                curr.next[c] = new Node()
            }

            curr = curr.next[c]
        }

        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const letters = word.split('')

        const backtrack = (i, node) => {
            if(i == letters.length){
                return node.isEnd
            }
            const char = letters[i];

            if(char !== '.'){
                if(!node.next[char]){
                    return false
                }

                return backtrack(i + 1, node.next[char])

            }else{
                for(const key in node.next){
                    if(backtrack(i + 1, node.next[key])){
                        return true
                    }
                }

                return false
            }
        }


        return backtrack(0, this.root)

    }


}
