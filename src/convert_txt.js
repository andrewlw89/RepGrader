"use strict";

var fs = require('fs');
var filename = "push_up_female.txt";


fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var obj2 = process_file(data);
  console.log(JSON.stringify(obj2));
});

function process_file(data) {
  var lines = data.split("\n");
  var index = 0;  // set ahead of 0 to skip header lines
  var situp_count = 77;
  var obj = {};

  for(index; index < lines.length; index++) {
    var tokens = lines[index].trim().split(/\s+/);
    var scores = tokens.map(x => parseInt(x));

    obj[situp_count--] = scores;
  }

  return obj;
}