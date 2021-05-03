function convertToString(num){
	//convert each number to a string representing the number
}

function parseNums() {
  array = process.argv.slice(2); 
  for (let index = 0; index < array.length; index++) {
    convertToString(array[index]);
  }
}

parseNums();