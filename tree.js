function chieuCaoCay(root) {
	if (root === null) {
		return 0;
	}

	let leftHeight = chieuCaoCay(root.left);
	let rightHeight = chieuCaoCay(root.right);

	return Math.max(leftHeight, rightHeight) + 1;
}

console.log("Chiều cao của cây nhị phân là: " + chieuCaoCay(rootNode));

function kiemTraCanBang(root) {
	if (root === null) {
		return true;
	}

	let leftHeight = chieuCaoCay(root.left);
	let rightHeight = chieuCaoCay(root.right);

	return (
		Math.abs(leftHeight - rightHeight) <= 1 &&
		kiemTraCanBang(root.left) &&
		kiemTraCanBang(root.right)
	);
}

console.log(
	"Cây có cân bằng không? " + (kiemTraCanBang(rootNode) ? "Có" : "Không")
);
