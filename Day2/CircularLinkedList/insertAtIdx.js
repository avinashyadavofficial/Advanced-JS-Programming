class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function print(head) {
    let ans = "";
    let temp = head;
    ans += temp.data;
    if (temp.next != null) {
        ans += "->";
    }
    temp = temp.next;
    while (temp != head) {
        ans += temp.data;
        if (temp.next != head) {
            ans += "->";
        }
        temp = temp.next;
    }
    console.log(ans);
}

function insertAtIdx(head, ele, index) {
    let newNode = new Node(ele);
    if (index < 0) {
        console.log("Invalid");
        return head;
    }

    let last = head;
    while (last.next != head) {
        last = last.next;
    }

    if (index == 0) {
        newNode.next = head;
        last.next = newNode;
        head = newNode;
        return head;
    } else {
        let temp = head;
        while (temp.next != head && index > 1) {
            temp = temp.next;
            --index;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        return head;
    }
}

let head = new Node(10);
let second = new Node(20);
let third = new Node(30);
let last = new Node(40);
head.next = second;
second.next = third;
third.next = last;
last.next = head;

print(head);
head = insertAtIdx(head, 100, 4); 
print(head);
