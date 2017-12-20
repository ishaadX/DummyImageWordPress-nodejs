# DummyImageWordPress-nodejs

### Installation

Go to terminal and type
	`npm i`
After install the node modules type
	`nodemon`

### Usages

This is a project is done to help you to remove all your .jpg/.gif image by a placeholder.jpg image.

##### Step 01 : 
	- [ ] create a placeholders folder in wp-content > uploads folder
	- [ ] copy and paste a placeholder.jpg image there

##### Step 02 :
	- [ ] Those xml files you want to replaced put inside the admin/initialXML folder

##### Step 03 :	
	- [ ] Go to admin/server.js file and search for this code `for ( let j = 0; j < 25; j++ ) {}`
	- [ ] set value[number of xml file] in for each loop. (e.g. in place of 25. It will be solved soon!)
	- [ ] now run nodemon on terminal


It will create the regenrated XML. Also some blank XML file will be created on root folder. Delete those!
Only keep the xml inside the replaceXML folder. 

XML files inside replaceXML folder is the usable file. 


Give a star.... Thanks!