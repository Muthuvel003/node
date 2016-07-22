var fs = require('fs');

var content =[];

var ns=fs.createReadStream('Indicator.csv','utf-8');

var ws=fs.createWriteStream('new3.csv');

ns.on('data',function(test){

	var lines=test.toString().split(/\s*\r\n\s*/);	
	
	for(var i=0;i<lines.length;i++){
		content.push(lines[i].toString().split(","));
	}
	console.log(content);

	ns.pipe(ws);
})


.on("end",function(){

	console.log("Finish");

});




//console.log(contents); 


//var lines=contents.split(/\s*\r\n\s*/);

//  var header=lines[0].split(",");
  //console.log(lines[0].split(","));
  
  /*for(var i=1;i<lines.length-1;i++){

  		var linevalue=lines[i].split(",");

  		for(var j=0;j<header.length;j++){

  			if(linevalue[0]==="India")

	  		console.log(header[j]+":"+linevalue[j]);
    
		}	  
		console.log("\n");
    }

	*/

  