// Partition: Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x. 
// If x is contained within the list, the values of x only need to be after the elements less than x (see below). 
// The partition element x can appear anywhere in the "right partition"; it does not need to appear
// between the left and right partitions.
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5] 
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

const partitionLL = (head, key) => {
    const newHead = null;
    // poplate with node.data >= key
    // populate with node.data < key
    let curr = head;
    let tail = null;
    while (curr) {
        if (curr.data >= key) {
            if (newHead === null) {
                newHead = new Node(curr.data);
                tail = newHead;
            } else {
                tail.next = new Node(curr.data);
                tail = tail.next;
            }
        }
        curr = curr.next;
    }
    curr = head;
    while (curr) {
        if (curr.data < key) {
            if (newHead === null) {
                newHead = new Node(curr.data);
                tail = newHead;
            } else {
                tail.next = new Node(curr.data);
                tail = tail.next;
            }
        }
        curr = curr.next;
    }
    return newHead;
}