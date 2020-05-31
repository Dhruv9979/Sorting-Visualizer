export function mergeSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const animationsArr = arr.slice();
    mergeSort(arr, 0, arr.length - 1, animationsArr , animations);
    return animations
}

function mergeSort(mainArr, startIdx, endIdx, animationsArr, animations) {
    if (startIdx === endIdx) return;
	let middle = Math.floor((startIdx + endIdx) / 2);
	mergeSort(animationsArr, startIdx, middle, mainArr, animations);
	mergeSort(animationsArr, middle + 1, endIdx, mainArr, animations);
	return mergeArrays(mainArr, startIdx, middle, endIdx, animationsArr, animations);
}

function mergeArrays(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while (i <= middleIdx && j <= endIdx) {
		animations.push([i, j]);
		animations.push([i, j]);
		if (auxiliaryArray[i] <= auxiliaryArray[j]) {
			animations.push([k, auxiliaryArray[i]]);
			mainArray[k++] = auxiliaryArray[i++];
		} else {
			animations.push([k, auxiliaryArray[j]]);
			mainArray[k++] = auxiliaryArray[j++];
		}
	}
	while (i <= middleIdx) {
		animations.push([i, i]);
		animations.push([i, i]);
		animations.push([k, auxiliaryArray[i]]);
		mainArray[k++] = auxiliaryArray[i++];
	}
	while (j <= endIdx) {
		animations.push([j, j]);
		animations.push([j, j]);
		animations.push([k, auxiliaryArray[j]]);
		mainArray[k++] = auxiliaryArray[j++];
	}
}