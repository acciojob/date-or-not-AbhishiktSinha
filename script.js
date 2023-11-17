var isDate = function (input) {
  //   write your code 
	let dateContainer = new Date(input);
	if(dateContainer.toString() == "Invalid Date") return false;
	return true;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
