function bubbleSort(array) {
	/*
	space complexity: O(1) because we use the original array 
	time complexity: O(n^2) because we loop all the array twice
	*/
	for (let i = array.length - 1; i > 0; i--) {
		// for every item in the array
		for (let j = 0; j < i; j++) {
			// check every item that didn't in it place
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

function selectionSort(array) {
	/*
	space complexity: O(1) because we use the original array 
	time complexity: O(n^2) because we loop all the array twice
	*/
	let min;
	for (let i = 0; i < array.length - 1; i++) {
		min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (i !== min) {
			let temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
	return array;
}

function insertionSort(array) {
	/*
	space complexity: O(1) because we use the original array 
	time complexity: O(n^2) because we loop all the array twice
	*/
	let temp;
	for (let i = 1; i < array.length; i++) {
		temp = array[i];
		for (var j = i - 1; array[j] > temp && j > -1; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = temp;
	}
	return array;
}
function merge(array1, array2) {
	let combined = [];
	let i = 0;
	let j = 0;
	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			combined.push(array1[i]);
			i++;
		} else {
			combined.push(array2[j]);
			j++;
		}
	}
	while (i < array1.length) {
		combined.push(array1[i]);
		i++;
	}
	while (j < array2.length) {
		combined.push(array2[j]);
		j++;
	}
	return combined;
}

function mergeSort(array) {
	/*
	space complexity: O(n) because we need to create new arrays according to the number of the elements in the original array
	time complexity: O(n log(n))
	breaking the array - O(log(n)) because in every step we divide by 2
	reassembly the array - O(n) because in the end we need to loop through all the items
	
	*/
	if (array.length === 1) return array;
	let mid = Math.floor(array.length / 2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
	let swapIndex = pivotIndex;
	for (let i = pivotIndex + 1; i < endIndex; i++) {
		if (array[i] < array[pivotIndex]) {
			swapIndex++;
			swap(array, swapIndex, i);
		}
	}
	swap(array, pivotIndex, swapIndex);
	return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
	/*
	space complexity: O(1) because we use the original array 
	time complexity: O(n log(n))
	move the items - O(n) because we loop over all the items to the end
	swap the items - O(log(n)) because in every loop we swap half of the previous array
	
	IMPORTANT!!
	if the array is already sorted (or almost sorted) the complexity is O(n^2) because we need to loop all the array twice
	*/
	if (left < right) {
		let pivotIndex = pivot(array, left, right);
		quickSort(array, left, pivotIndex - 1);
		quickSort(array, pivotIndex + 1, right);
	}
	return array;
}

// console.log("bubbleSort", bubbleSort([4, 2, 6, 5, 1, 3]));
// console.log("selectionSort", selectionSort([4, 2, 6, 5, 1, 3]));
// console.log("insertionSort", insertionSort([2, 1, 3, 4, 5, 6]));
// console.log("mergeSort", mergeSort([3, 1, 4, 2, 9, 5, 7, 6]));
console.log("quickSort", quickSort([4, 6, 1, 7, 3, 2, 5]));
