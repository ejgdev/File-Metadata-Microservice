const fs = require("fs");

module.exports = (req, res) => {
  handlePost(req, res);        // export the function
};                             // end export

//The Function that handles the size response
function handlePost (req,res){
    fs.unlink(req.file.path,function(err){    // This delete the file uploaded, the file's information is in the request object. The Multer Module added this.
      if(err){                                // if there a problem, return the error in the console
        return console.log("error, Can't delete the file: " + err);
        } 
      else {
        console.log(req.file.originalname +' is deleted'); // Show the file is deleted, is good to know it.
      }
    });
    res.json({Size: req.file.size})  // Send the size in json format
};