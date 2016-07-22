  
  var fs = require('fs');
  var contents = fs.readFileSync("new2.csv","utf-8");
  //console.log(contents); 


  var lines=contents.split(/\s*\r\n\s*/);

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length-1;i++){

      var obj = {};
	  
      var currentline=lines[i].split(",");

	    for(var j=0;j<headers.length;j++){
		
          obj[headers[j]] = currentline[j];
	  
      }

	    result.push(obj);
      //console.log(obj);

      if(obj.cname==="India")
      {
          console.log(obj);
          //console.log(result);
      }
  }
  