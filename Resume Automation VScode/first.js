// var newDoc = app.documents.add();
//newDoc.name = 'new fon';

var openDoc = app.activeDocument;

// var name = openDoc.name

var firstTframe = openDoc.pages[0].textFrames[0];


// $.write(firstTframe.contents)


placeholder = ['==opening==', '==company==']
newTest = ['ROLE', 'COMPANY']

var incomingList = [{
    "OPENING": "ROLE",
    "COMPANY": "COMPANY",
}];

/*
var incomingList = [{
    "name": "Homer Simpson",
    "age": 45,
    "occupation": "Nuclear Plant Technician",
      ...
  },{
    "name": "Marge Simpson",
    "age": 44,
    "occupation": "Homemaker",
      ...
  },
    ...
  ]
*/
/*
for (let [key, value] of Object.entries(p)) {
  console.log(`${key}: ${value}`);
}
*/

// $.writeln(incomingList[0].COMPANY);

for (var i = 0; i < incomingList.length; i+=1) {
    //$.writeln(incomingList[i])
    var part = incomingList[i];
    $.writeln(part);
    /*
    for (let [k, v] of Object.defineProperties(part)) {
        $.write('${k} - ${v}');
    }
    */
   // Object.entries(part).forEach(key => {
    var a = Object.keys(part).forEach(function(key) {
        $.writeln.log(key, part[key]);
    });
    $.writeln(a)
       $.writeln(key, part(key))
   //})
   $.writeln(i, '2')
}



/*
target illustrator

function test() {

    var doc = app.activeDocument;

    var myArray = ["usedcolor1", "usedcolor2", "usedcolor3", "usedcolor4", "usedcolor5", "usedcolor6", "usedcolor7", "usedcolor8", "usedcolor9"];

    for (var i = 0; i < myArray.length; i++) {

                var t = doc.textFrames.getByName(myArray);

        var txt = t.contents.replace("PANTONE ", "P.");

        t.contents = txt;

    }

};

test();
*/

$.writeln('done')