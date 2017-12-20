import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import xml2js from 'xml2js';
import path from 'path';

import {readFunc} from './readXML';

const PORT = process.env.PORT || 5000;
const app = express();

const inputFolder = __dirname + '/initialXML/';
const outputFolder = __dirname + '/replaceXML/';

// fs.readFile(readPath, (err, xmlData) => {
//   parser.parseString(xmlData, (err, data) => {
//     const result = JSON.stringify(data).replace('/wp-content/uploads/', '/wp-content/uploads/placeholders/');
//     fs.writeFile (writePath, result, function(err) {
//       if (err) throw err;
//       console.log('complete');
//     });
//   });
// });




fs.readdir(inputFolder, async (err, files) => {
	const fileArray = [];
	for(const i in files) {
	   if(path.extname(files[i]) === ".xml") {
	     fileArray.push(files[i]);
	   }
	}
	for ( let j = 0; j < 25; j++ ) {
		const inputDataPath = inputFolder + fileArray[j];
		const readFunction = await readFunc(inputDataPath, outputFolder, fileArray[j]);
	}
})


// ****************************
// ****************************
// bottom here codes are workin
// ****************************
// ****************************


	// files.forEach(file => {
	// 	// console.log(file);
	// 	const dataPath = inputFolder + file;
	// 	console.log(dataPath);
	// 	const readFunction = await readFunc(dataPath);
		// fs.readFile(dataPath, 'utf8', function (err,data) {
		// 	// console.log(data);
		//   if (err) {
		//     return console.log(err);
		//   }
		  // const outputPath = outputFolder + file;
		  // var result = data.replace('/wp-content/uploads/', '/wp-content/uploads/placeholders/');
		  // fs.writeFile(outputFolder, result, 'utf8', function (err) {
		  //    if (err) return console.log(err);
		  //    console.log('sucess write');
		  // });
		// });
	
	// });



// ****************************
// ****************************
// bottom here codes are workin
// ****************************
// ****************************

// fs.readFile(readPath, 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace('/wp-content/uploads/', '/wp-content/uploads/placeholders/');
//   fs.writeFile(writePath, result, 'utf8', function (err) {
//      if (err) return console.log(err);
//      console.log('sucess write');
//   });
// });


app.get('/', (req, res) => {
  res.json({message : 'status ok'});
})

app.listen(PORT, () => {
  console.log('Server is ok on port : ' + PORT );
})
