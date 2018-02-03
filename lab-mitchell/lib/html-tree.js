'use strict';


const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });



fs.readFileProm(`${__dirname}/../assets/minimal.html`)
  .then(buffer => buffer.toString()) //stringifies data stream
  .then(doc => doc.split('>'))
  .then(lines => lines.map(i => i.trim())) //gets rid of whitespace
  .then(lines => lines.map(i => i.split('<').join('>'))) //gets rid of '' in ['', 'asdfasdf'] 
  // .then(lines => lines.map(i => i.split('<').join(''))) //gets rid of '' in ['', 'asdfasdf'] 
  .then(lines => lines.map(i => i.split('/')))
  .then(lines => lines.map(i => i.filter(j => j.length > 0))) //removes all the '' 
  .then(lines => lines.map(i => i[0]))
  .then(lines => {
    let spliced = lines;
    spliced.splice(0, 1);
    spliced.splice(-1, 1);
    return spliced;
  })
  .then(lines => lines.map(i => i.split('span').join('')))
  .then(lines => lines.filter(i => i !== '>'))
  // .then(lines => lines.map(i => {
  //   if(i.startsWith('>') && i.length > 1) {
  //     asdf;
  //   }
  // }))
  .then(console.log);