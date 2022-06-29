var openDoc = app.activeDocument;

// var myPresets = app.pdfExportPresets.everyItem();

// Note some things need to change for Windows!
var file = File(File($.fileName).parent.fsName + '/jobs.csv');
file.encoding = 'UTF8';
file.lineFeed = 'Macintosh'; // Change for Windows!
file.open('r', undefined, undefined); // Opens file
var content = file.read();
file.close();
var lines = content.split('\n') // Windows should be '\r'
var data = []
var t = lines[0].split(',') // Usually for heads yet just testing here

$.writeln(typeof t)
$.writeln(t[0])
$.writeln(t.length)

/*
var file = File(File($.fileName).parent.fsName + '/data.csv'); // get the file
file.encoding = 'UTF8'; // set some encoding
file.lineFeed = 'Macintosh'; // set the linefeeds
file.open('r',undefined,undefined); // read the file
var content = file.read(); // get the text in it
file.close(); // close it again
var lines = content.split('\n');// split the lines (windows should be '\r')
var data = [];// will hold the data
var keys = lines[0].split(','); // get the heads
// loop the data
for(var i = 1; i < lines.length;i++){
  var obj = {}; // temp object
  var cells = lines[i].split(',');// get the cells
  // assign them to the heads
  obj[keys[0]] = cells[0];
  obj[keys[1]] = cells[1];
  obj[keys[2]] = cells[2];
  obj[keys[3]] = cells[3];
  obj[keys[4]] = cells[4];
  data.push(obj); // add to data
  }

$.writeln(data.toSource()); // show what we got
*/