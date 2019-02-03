const arr = [6,5,3,1,8,7,2,4];
const insrtionSort = arr => {
	for(let i = 0; i <= arr.length - 1; i++)
	{
		let indexToCompare = i;
		for(j = i - 1; j >= 0;)
		{
			
			if(arr[indexToCompare] < arr[j])
			{

				tmp = arr[j]
				arr[j] = arr[indexToCompare];
				arr[indexToCompare] = tmp;
				indexToCompare--;
				j--
			else {
				break;
			}
		}
	}
}
