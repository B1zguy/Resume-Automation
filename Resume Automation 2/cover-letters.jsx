var openDoc = app.activeDocument;

var myPDFExportPreset = app.pdfExportPresets.item("[High Quality Print]");
app.pdfExportPreferences.pageRange = "1";
// var dir = "/Volumes/GoogleDrive/My Drive/_Life/Work/Resumes/Resume 9.x/Resume 9.1/Resume Automation VScode/Auto-Resumes/"
var dir = arguments[0]
// alert (dir,["Resume Script", false])

function extractJobList(jobsFile){
    // alert ("In Function",["Resume Script", false])
    // Note some things need to change for Windows!
    // var file = File(File($.fileName).parent.fsName + '/jobs.csv');
    var file = File(jobsFile)
    file.encoding = 'UTF8';
    file.lineFeed = 'Macintosh'; // Change for Windows!
    file.open('r', undefined, undefined); // Opens file
    var content = file.read();
    file.close();
    //var lines = content.split('\n') // Windows should be '\r'
    var lines = content.replace(/\r/g, "").split(/\n/);
    alert (lines + ' <<<',["Resume Script", false])
    alert (lines.length + ' <<<',["Resume Script", false])
    //var lines = lines.slice(1)
    // $.writeln(lines.stringify)
    var jobs = []
    for (var i=0; i < lines.length; i++) {
        $.writeln(lines[i].length)
        $.writeln(lines[i])
        var a = lines[i].split(',').slice(1)
        $.writeln(a)
        //$.writeln(a[0])
        //jobs.push.apply([lines.i[0], lines.i[1]])
        //jobs.push.apply(jobs, a)
        // jobs.push.apply(jobs, [a])
        jobs.push(a)
    }
    //$.writeln(jobs.alert())\
    //$.writeln(jobs[0].length)
    return jobs;
}
var jobList = extractJobList(arguments[1]);
$.writeln(jobList.length);

placeholder = ["OPENING", "COMPANY"]

for (var i=0; i < jobList.length; i++) {
    // Hardcoding changes for now, unlikely 
    // to need more than OPENING & COMPANY

    for (var j=0; j < jobList[i].length; j++) {
        // $.writeln(jobList[i][j])
        $.writeln(placeholder[j])
        app.findTextPreferences = NothingEnum.nothing;
        app.changeTextPreferences = NothingEnum.nothing;

        app.findTextPreferences.findWhat = placeholder[j];
        app.changeTextPreferences.changeTo = jobList[i][j];

        openDoc.changeText();
    }
    var pathy = "Nathan - " + jobList[i][1] + " Cover"  // Hardcode val for now
    var dirPathy = dir+pathy
    app.activeDocument.exportFile(ExportFormat.pdfType, File(dirPathy), false, myPDFExportPreset);

    for (var j=0; j < jobList[i].length; j++) {
        $.writeln(jobList[i][j])
        // $.writeln(placeholder[j])
        app.findTextPreferences = NothingEnum.nothing;
        app.changeTextPreferences = NothingEnum.nothing;

        app.findTextPreferences.findWhat = jobList[i][j];
        app.changeTextPreferences.changeTo = placeholder[j];

        openDoc.changeText();
    }
}

$.writeln('done')
alert ("All Done!",["Resume Script", false])