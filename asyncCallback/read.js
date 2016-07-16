var fs = require('fs');
console.log("Asynch BEGIN");
var options = {encoding: 'utf8', flag: 'r'};

//readFile is a func which has 3 parameters 
//(.data.txt, options, functin()), 
//so this is call back fun......
//readFile is an io method running 
//in background, submitted to bg, ur waiter thread is ready to execute line 14, shows async begins n asyncg ends
fs.readFile('./data.txt', options, function(err, fileData){
if(err){
	console.log("File Not Found");
}else{
	console.log(fileData);
};
});

console.log("Asynch program Ends");