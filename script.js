function firstNonRepeatedChar(str) {
 // Write your code here
	let obj = {};
	let char = "";
	for (let index = 0; index < str.length; index++) {
		if(!(str.charAt(index) in obj)){
			obj[str.charAt(index)] = 1;
		}else{
			obj[str.charAt(index)] += 1
		}
	}
	for(let key in obj){
		if(obj[key] == 1){
			char = key;
			break;
		}
	}
	if(char == ""){
		return null;
	}else{
		return char;
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
