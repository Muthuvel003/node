var fs = require('fs');

var content =[];

var ns=fs.createReadStream('Indicator.csv','utf-8');

var ws=fs.createWriteStream('new3.csv');

ns.on('data',function(test){

	var lines=test.toString().split('\r\n');

	var headers=lines[0].split(",");	
	
	for(var i=1;i<lines.length-1;i++){

      var obj = {};
	  
      var currentline=lines[i].split(",");

	    for(var j=0;j<headers.length;j++){
		
          obj[headers[j]] = currentline[j];
	  
      }

	    content.push(obj);
      //console.log(obj);

      if(obj.cname==="India")
      {
          console.log(obj);
          //console.log(result);
      }
  }
	ns.pipe(ws);

})


.on("end",function(){

	console.log("Finish");

});
