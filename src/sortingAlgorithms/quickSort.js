export function quickSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
	if (arraysAreEqual(javaScriptSortedArray, array)) return animations;
	const auxiliaryArray = array.slice();
	quickSort(animations, auxiliaryArray, 0, auxiliaryArray.length - 1);
	return animations;
}
function arraysAreEqual(arrayOne, arrayTwo) {
	if (arrayOne.length !== arrayTwo.length) return false;
	for (let i = 0; i < arrayOne.length; i++) {
		if (arrayOne[i] !== arrayTwo[i]) {
			return false;
		}
	}
	return true;
}

function swap(animations, arr, leftIndex, rightIndex) {
	var temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;

	animations.push([leftIndex, rightIndex]);
}
export function pivot(arr, start = 0, end = arr.length - 1, animations) {
	var pivotValue = arr[start];
	var pivotIdx = start;
	for (let i = start + 1; i <= end; i++) {
		if (pivotValue > arr[i]) {
			pivotIdx++;
			swap(animations, arr, i, pivotIdx);
		}
	}
	swap(animations, arr, start, pivotIdx);
	return pivotIdx;
}

export function quickSort(animations, arr, left, right) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right, animations);
		//Left Side
		quickSort(animations, arr, left, pivotIndex - 1);
		//Right Side
		quickSort(animations, arr, pivotIndex + 1, right);
	}
	return arr;
}
