class Node {
    constructor() {
        this.next = {};
        this.word = null;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;

        for (let c of word) {
            if (!curr.next[c]) {
                curr.next[c] = new Node();
            }

            curr = curr.next[c];
        }

        curr.word = word;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const row = board.length;
        const col = board[0].length;
        const res = new Set();

        const trie = new Trie();

        for (let word of words) {
            trie.insert(word);
        }

        const dfs = (r, c, node) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= row ||
                c >= col ||
                board[r][c] == "#" ||
                !node.next[board[r][c]]
            )
                return;

            const char = board[r][c];
            const nextNode = node.next[char];

            if(nextNode.word !== null){
                res.add(nextNode.word);
            }

            board[r][c] = "#";

            dfs(r + 1, c, nextNode);
            dfs(r - 1, c, nextNode);
            dfs(r, c + 1, nextNode);
            dfs(r, c - 1, nextNode);

            board[r][c] = char;
        };

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                dfs(r, c, trie.root);
            }
        }

        return [...res];
    }
}
