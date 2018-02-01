const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const fileData = require('./fileData.js');    //module handle Post

module.exports = (app) => {
  app.post('/upload',upload.single('myFile'), fileData);
};