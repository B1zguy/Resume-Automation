# Resume Automation
This is the initial project for automating job applications.

This program auto-generates cover letters based on Seek listings. The title and company of the job is scraped then fed into InDesign that spits out PDFs based on a template with placeholder keywords. Strictly speaking, this project practically consists of two scripts: the main program that does the scraping, processing and feeding of jobs; and the InDesign automation engine that generates ready-to-go cover letters based on the aforementioned data.

## Program Flow
_URLS need to be pasted into the jobs.csv file in 'Resume Automation 2' _
1. Fetch job title and company for each URL
2. Write back this data to the same file
3. Launch AppleScript via shell
4. AppleScript runs the ExtendScript code that automates InDesign
5. ExtendScript code pulls data from job.csv 
6. Replace keyword placeholders in template
7. Save as a new cover letter PDF.
Rinse-repeat.


##  Resume Automation 2
This is the main folder 'in charge'. first.py reads the Seek URLs in jobs.csv then fetches the job titles and companies - writing back to jobs.csv. After this is done, it executes the ExtendScript code via AppleScript. I can't remember the exact details, yet there was a reason why Python can't easily interact with the AppleScript APIs. The original goal was to just be AppleScript launching and managing ExtendScript, but it was easier to do the scraping via Python - Python → ExtendScript was either too hard or not possible so just excuted AS via Python and managed everything from there.

There were also using parsing variables between AS and ES.

If porting to Windows, there are COMs API (that InDesign exposes for automation) available to Python.

##  Resume Automation VScode
This folder handles the InDesign side of automation via ES. To note, vsCode was utilised because it's the only current debugger maintained by Adobe. The actual final code is in 'Resume Automation 2' as cover-letters.jsx. This folder handles my development and testing ground at the time.

The ES (.jsx) file essentially reads the job titles & companies keywords per line, feeds this into the ID template by replacing placeholders, then exporting a finished PDF. Do note that ES is based on ECMAscript 3!


-