   class Node{
        int val;
        int key;
        Node prev;
        Node next;

        Node(int key, int val){
            this.key = key;
            this.val = val;
            this.prev = null;
            this.next = null;
        }
    }

 // Recent cache changes with every operation

class LRUCache {
    private int cap;
    private Map<Integer, Node> cache;
    private Node left;
    private Node right;

    public LRUCache(int capacity) {
        this.cap = capacity;
        this.cache = new HashMap<>();
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = right;
        this.right.prev = left;
    }
    
    public int get(int key) {
        if(cache.containsKey(key)){
            Node node = cache.get(key);

            // remove operation -> curr
            remove(node);

            // insert operation -> val
            insert(node);

            return node.val;
        }

        return -1;

    }
    
    public void put(int key, int value) {
        if(cache.containsKey(key)){
            Node node = cache.get(key);
            remove(node);
        }

        Node node = new Node(key, value);
        cache.put(key, node);
        insert(node);

        if(cache.size() > this.cap){
            Node leftNext = this.left.next;
            remove(leftNext);
            cache.remove(leftNext.key);
        }
    }


    public void insert(Node node){
        Node p = right.prev;
        p.next = node;
        node.next = right;
        node.prev = p;
        right.prev = node;
    }

    public void remove(Node node){
        Node l = node.prev;
        Node r = node.next;

        l.next = r;
        r.prev= l;
    }
}
