function convertToString(num, end){
	//convert each number to a string representing the number
	str = num;
  	let string = "";
  	for (var i = 0, len = str.length; i < len; i += 1) {
		switch(+str.charAt(i)){
		case 0:
		  string += "Zero";
		  break;
		case 1:
		  string += "One";
		  break;
		case 2:
		  string += "Two";
		  break;
		case 3:
		  string += "Three";
		  break;
		case 4:
		  string += "Four";
		  break;
		case 5:
		  string += "Five";
		  break;
		case 6:
		  string += "Six";
		  break;
		case 7:
		  string += "Seven";
		  break;
		case 8:
		  string += "Eight";
		  break;
		case 9:
		  string += "Nine";
		  break;
		}
	}
	if (!end) 
       		string += ",";
  	process.stdout.write(string);
}

function parseNums() {
	array = process.argv.slice(2); 
	for (let index = 0; index < array.length; index++) {
		if (index != array.length-1)
          		status = false;
     		else status = true;
    		convertToString(array[index], status);
  	}
}

parseNums();
