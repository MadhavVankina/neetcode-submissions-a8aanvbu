class Node{
    int val;
    Node next, prev;

    Node(int val, Node next, Node prev){
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
        left = new Node(0, null, null);
        right = new Node(0, null, null);

        left.next = right;
        right.prev = left;
    }

    public boolean enQueue(int value) {
        if(isFull()){
            return false;
        }

        Node curr = new Node(value, null, null);
        Node rPrev = right.prev;
        rPrev.next = curr;
        curr.next = right;
        curr.prev = rPrev;

        size++;

        return true;
    }
    
    public boolean deQueue() {
        if(isEmpty()){
            return false;
        }

        Node currLast = left.next.next;
        currLast.prev = left;
        left.next = currLast;

        size--;

        return true;
        
    }
    
    public int Front() {
        return right.prev.val;
    }
    
    public int Rear() {
        return left.next.val;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == cap;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */