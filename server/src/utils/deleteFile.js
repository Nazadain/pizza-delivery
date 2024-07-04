const fs = require("fs");

const deleteFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
    console.log("File deleted successfully");
  });
};

module.exports = deleteFile;
