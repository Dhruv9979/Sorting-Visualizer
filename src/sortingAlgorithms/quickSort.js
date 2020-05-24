export const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		//Left Side
		quickSort(arr, left, pivotIndex - 1);
		//Right Side
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function pivot(arr, start = 0, end = arr.length + 1) {
	let pivot = arr[start];
	let pivotIndex = start;
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			pivotIndex++;
			swap(arr, i, pivotIndex);
		}
	}
	swap(arr, start, pivotIndex);
	return pivotIndex;
}

function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}