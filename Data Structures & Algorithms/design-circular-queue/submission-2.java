class Node {
    int val;
    Node next, prev;

    Node(int val, Node next, Node prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyCircularQueue {
    private int size;
    private int cap;
    private Node left, right;

    public MyCircularQueue(int k) {
        size = 0;
        cap = k;
        // Initialize dummy head and tail nodes
        left = new Node(0, null, null);
        right = new Node(0, null, null);

        left.next = right;
        right.prev = left;
    }

    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }

        // Create new node
        Node newNode = new Node(value, null, null);

        // Insert before the 'right' dummy node
        Node rPrev = right.prev; // Get the current last node
        rPrev.next = newNode;
        newNode.prev = rPrev;
        newNode.next = right;
        right.prev = newNode;

        size++;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }

        // The node to be removed is left.next
        Node nodeToRemove = left.next;

        // Update links to bypass the nodeToRemove
        left.next = nodeToRemove.next;
        nodeToRemove.next.prev = left;

        // Optional: help garbage collection by nulling references
        nodeToRemove.next = null;
        nodeToRemove.prev = null;

        size--;
        return true;
    }

    public int Front() {
        if (isEmpty()) {
            return -1; // Or throw an exception, common practice for empty queue
        }
        return left.next.val; // Front element is after the dummy 'left' node
    }

    public int Rear() {
        if (isEmpty()) {
            return -1; // Or throw an exception
        }
        return right.prev.val; // Rear element is before the dummy 'right' node
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == cap;
    }
}