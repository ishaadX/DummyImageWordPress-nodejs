import fs from 'fs';

const writeFunc = ( outputFolder ,result, name) => {
  const writeStream = fs.createWriteStream(name);
  const out = outputFolder + writeStream.path;
  fs.writeFile(out, result, 'utf8', function (err) {
    if (err) { return console.log(err); }
    console.log('sucess write');
  });  
}

export {writeFunc};