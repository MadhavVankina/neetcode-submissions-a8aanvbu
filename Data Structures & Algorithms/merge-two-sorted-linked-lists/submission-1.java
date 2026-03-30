/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = new ListNode(0);
        ListNode start = head;
        ListNode l1 = list1;
        ListNode l2 = list2;

        while(l1 != null && l2 != null){
            if(l1.val <= l2.val){
                head.next = l1;
                l1 = l1.next;
            }else{
                head.next = l2;
                l2 = l2.next;
            }
            head = head.next;
        }

        while(l1 != null){
            head.next = l1;
            l1 = l1.next;
            head = head.next;
        }

        while(l2 != null){
            head.next = l2;
            l2 = l2.next;
            head = head.next;
        }

        return start.next;
    }
}