var fs = require('fs');
const allFileContents = fs.readFileSync('mynewfile3.txt', 'utf-8');
var sorted = allFileContents.split(/\r?\n/).sort().sort(function(a, b) {

     if (a[0] == b[0])
          if (a[a.length - 1] > b[b.length - 1])
                return 2;
          else if (a[a.length - 1] < b[b.length - 1])
                return -1;
    return 0;

}).forEach(a =>  {
        console.log(a);
        var ch =  a + "\n";
        fs.appendFile('mynewfile.txt',ch, function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
  
    
})