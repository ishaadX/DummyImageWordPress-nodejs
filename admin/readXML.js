import fs from 'fs';
import xml2js from 'xml2js';
import path from 'path';
import {writeFunc} from './writeXML';

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

const readFunc = (inputDataPath, outputFolder, name) => {
  if ( fs.existsSync(outputFolder) ) {
    console.log('ekhane');
    fs.readFile(inputDataPath, 'utf8', function (err,data) {
      if (err) { return console.log(err); }
      let result = data.replaceAll('/wp-content/uploads/', '/wp-content/uploads/placeholders/');
			const imageLinks = result.match(/(\/.*?\.\w{3})/img);
			imageLinks.forEach( str => {
        if( str.startsWith('/wp-content/uploads/placeholders/') && (str.endsWith('.jpg') || str.endsWith('.png'))) {
          // console.log(str);
			    result = result.replace(str,'/wp-content/uploads/placeholders/placeholder.jpg');
        }
			});

      const writeFuncCall = writeFunc( outputFolder ,result, name);         
    });
  } else {
    fs.mkdir(outputFolder, (err, dirRsult) => {
      console.log('nah ekhane');
      if (err) { return console.log(err); }
      fs.readFile(inputDataPath, 'utf8', function (err,data) {
        if (err) { return console.log(err); }
        let result = data.replaceAll('/wp-content/uploads/', '/wp-content/uploads/placeholders/');
        const imageLinks = result.match(/(\/.*?\.\w{3})/img);
        imageLinks.forEach( str => {
          if( str.startsWith('/wp-content/uploads/placeholders/') && (str.endsWith('.jpg') || str.endsWith('.gif')) )
            result = result.replace(str,'/wp-content/uploads/placeholders/placeholder.jpg');
        });
        const writeFuncCall = writeFunc( outputFolder ,result, name);               
      });            
    });
  }
}

export { readFunc };