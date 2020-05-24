export const bubbleSort = (arr) => {
	var noSwaps;
	for (var i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}
