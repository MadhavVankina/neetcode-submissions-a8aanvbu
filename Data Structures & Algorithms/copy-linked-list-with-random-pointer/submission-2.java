/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        // create all the individual nodes and store them

        Map<Node, Node> nodeMap = new HashMap<>();

        Node curr = head;

        while(curr != null){
            nodeMap.put(curr, new Node(curr.val));
            curr = curr.next;
        }


        // Node update the next and randoms of the nodes
        curr = head;

        while(curr != null){
            nodeMap.get(curr).next = nodeMap.get(curr.next);
            nodeMap.get(curr).random = nodeMap.get(curr.random);

            curr = curr.next;
        }

        return nodeMap.get(head);
    }
}
