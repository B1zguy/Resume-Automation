var openDoc = app.activeDocument;

var firstTframe = openDoc.pages[0].textFrames[0];

var textPairs = [['OPENING', 'CUstomer-SeRvice', 'COMPANY', 'Jb Hi-Fi']]

var myPDFExportPreset = app.pdfExportPresets.item("[High Quality Print]");
app.pdfExportPreferences.pageRange = "1";
// var pathy = "Nathan - " + 
var dir = "/Volumes/GoogleDrive/My Drive/_Life/Work/Resumes/Resume 9.x/Resume 9.1/Resume Automation VScode/Auto-Resumes/"

for (var i=0; i < textPairs.length; i++) {
    // Hardcoding changes for now, unlikely 
    // to need more than OPENING & COMPANY
    posit = 0
    for (var j=1; j <= 2; j++) {
        app.findTextPreferences = NothingEnum.nothing;
        app.changeTextPreferences = NothingEnum.nothing;

        app.findTextPreferences.findWhat = textPairs[i][posit];
        app.changeTextPreferences.changeTo = textPairs[i][posit+1];

        openDoc.changeText();
        posit = 2
    }

    var pathy = "Nathan - " + textPairs[i][posit+1] + " Cover"
    var dirPathy = dir+pathy
    app.activeDocument.exportFile(ExportFormat.pdfType, File(dirPathy), false, myPDFExportPreset);


    // Change back to template
    for (var j=1; j <= 2; j++) {
        app.findTextPreferences = NothingEnum.nothing;
        app.changeTextPreferences = NothingEnum.nothing;

        app.findTextPreferences.findWhat = textPairs[i][posit+1];
        app.changeTextPreferences.changeTo = textPairs[i][posit];

        openDoc.changeText();
        posit = 0
    }

    openDoc.changeText();
}


/*
for (var i=0; i < textPairs.length; i++) {
    openDoc.findGrepPreferences = NothingEnum.nothing;
    openDoc.changeGrepPreferences = NothingEnum.nothing;

    openDoc.findGrepPreferences.findWhat = "my search pattern";
    app.changeGrepPreferences.changeTo = "replacement string";
    myDocument.changeGrep();

*/


$.writeln('done')