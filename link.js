class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

  // Tạo một danh sách liên kết đơn
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

function timKiemDanhSach(head, value) {
    let current = head;

    while (current !== null) {
        if (current.data === value) {
            return true;  // Tìm thấy giá trị trong danh sách
        }
        current = current.next;
    }

    return false;  // Không tìm thấy giá trị trong danh sách
}
console.log(timKiemDanhSach(node1, 2));  // true
console.log(timKiemDanhSach(node1, 5));  // false