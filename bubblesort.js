function bubbleSort(array) {
	let arrLength = array.length - 1;
	let midPoint = Math.round(arrLength / 2);
	for (let j = arrLength; j >= midPoint; j--) {
		for (let i = 0; i < j; i++) {
			if (array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
			}
		}
	}
	return array;
}
