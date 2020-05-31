export function bubbleSortAnimations(arr) {
	const animations = [];
	if (arr.length <= 1) return arr;
	const auxiliaryArray = arr.slice();
	bubbleSort(animations, auxiliaryArray);
	return animations;
}

function bubbleSort(animations, auxiliaryArray) {
	var noSwaps;
	for (var i = auxiliaryArray.length; i > 0; i--) {
		noSwaps = true;
		for (var j = 0; j < i - 1; j++) {
			if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
				swap(auxiliaryArray, j, j + 1);
				animations.push([j, j + 1]);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return auxiliaryArray;
}

function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}
