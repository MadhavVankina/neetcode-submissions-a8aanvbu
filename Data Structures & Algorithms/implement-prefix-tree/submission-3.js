class Node {
    constructor(value = null){
        this.value = value;
        this.next = {};
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node(); 
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        const arr = word.split('');
        let currNode = this.root;

        for(let c of arr){
            if(!currNode.next[c]){
                currNode.next[c] = new Node(c);
            }

            currNode = currNode.next[c];
        }

        currNode.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const arr = word.split('');
        let currNode = this.root;

        for(let c of arr){
            if(!currNode.next[c]){
                return false;
            }

            currNode = currNode.next[c];
        }

        return currNode.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        const arr = prefix.split('');
        let currNode = this.root;

        for(let c of arr){
            if(!currNode.next[c]){
                return false;
            }

            currNode = currNode.next[c];
        }

        return true;
    }
}
