from bs4 import BeautifulSoup
import requests, csv, subprocess, os, json
from pprint import pprint

jCSV = 'jobs.csv'
dir_path = os.path.dirname(os.path.realpath(__file__)) # Using this method instead of os.getcwd() cos it follows symlinks
jobsFile = dir_path + '/' + jCSV # Building absolute path for ExtendScript
pdfExport_dir = "/Volumes/GoogleDrive/My Drive/_Life/Work/Resumes/Resume 9.x/Resume 9.1/Resume Automation VScode/Auto-Resumes/"

# Opens CSV w/ job URLs
# Scrapes each URL to gather Job Title & Company
# Chucks results into existing nested array
# Writes new array to aforementioned CSV
#    Contents of file are replaced for now, likely to change in future
def scraping(jobsFile):
    # Hold csv as nested list
    with open(jobsFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        jobsList = list(csv_reader)

    #pprint(jobsList)
    print('\n\n')
    # Iterate through jobList's URLs
    jobTitle_source = '._3e_q0lR > span:nth-child(1) > h1:nth-child(1)'
    jobCo_source = 'span._2rbnuTr:nth-child(2) > span:nth-child(1)'

    print('lolol', len(jobsList))
    # Can likely just make this an index loop
    for index, url in enumerate(jobsList):
        #print(url)
        #print(jobsList[index][:1])
        # Snip off Title & Co if using a prepopulated CSV (ie. re-running script)
        if len(jobsList[index]) > 1:
            jobsList[index] = jobsList[index][:1]
        #print(jobsList)
        url = jobsList[index][0]
        #print(url, 'pop')
        #url = url[:1]
        # print(url)
        # url = url[0] # Recall iterated through nested list yet really just need the URL here

        page = requests.get(url)
        soup = BeautifulSoup(page.text, 'html.parser')

        jobTitle = soup.select_one(jobTitle_source)
        jobCo = soup.select_one(jobCo_source)
        #print(jobTitle.get_text())

        jobsList[index].extend((jobTitle.get_text().strip(), jobCo.getText().strip()))
    # jobsList = tmpList
    pprint(jobsList)
    print(len(jobsList))
    with open(jobsFile, 'w') as csv_file_W:
        csv_writer = csv.writer(csv_file_W)
        csv_writer.writerows(jobsList)
        #for i in jobsList:
        #    csv_writer.writerow(i)

    return


def executeScript(exportdir, csvdir):
    # AppleScript simple enough to directly include
    # Keeping directories outside as variables for cleaner reading
    # and potential parametering in near future

    software = "/Applications/Adobe InDesign 2021/Adobe InDesign 2021.app"
    script = os.path.abspath('cover-letters.jsx') # AppleScript needs absolute paths
    # Must have quotes surrounding placeholders cos script needs them. Better than dealing w/ escaping
    print(exportdir)
    print(csvdir)
    #argsy = "\"${0} ${1}\"".format(exportdir, csvdir)
    #argsy = """\\\"{0}\\\" \\\"{1}\\\"""".format(exportdir, csvdir)
    #argsy = ooargsy.decode('UTF-8')
    #argsy = """ "{0}" "{1}" """.format(exportdir, csvdir)
    argsy = [exportdir, csvdir] # Hard code for now. Can make dynamic when wanting to expand size
    argsy = json.dumps(argsy)
    print('yummm', argsy)

    'cmd =' """
        on run (argv)
            tell application "{0}"
                activate
                do script "{1}" language javascript with arguments {{"pop"}}
            end tell
        end run
    """
    cmd = """
        tell application "{0}"
            activate
            do script "{1}" language javascript with arguments {2}
        end tell
        """
    '''
    print(cmd.format(software, script))
    pp = subprocess.run(['echo', '{0}'.format('tt')], capture_output=True, text=True)
    print(pp.stdout, pp.stderr)
    '''

    print(['osascript', '-e', cmd.format(software, script, argsy)])
    # Remember command will need to be different if deciding to include .jsx file in the future
    #result = subprocess.run(['osascript', '-e', cmd.format(software, script), '--', argsy], capture_output=True)
    result = subprocess.run(['osascript', '-e', cmd.format(software, script, argsy)], capture_output=True, text=True)

    return result.stdout, result.stderr # Wanna see console incase there are errors

print(scraping(jobsFile=jobsFile)) # Future proofing for paramters
print(executeScript(exportdir=pdfExport_dir, csvdir=jobsFile))

# https://stackoverflow.com/questions/3846626/is-it-possible-to-execute-jsx-scripts-from-outside-extendscript/22650029
