const fs = require("fs");

class FileUtils {
  deleteFile(path) {
    fs.unlink(path, (err) => {
      if (err) throw err;
      console.log("File deleted successfully");
    });
  }
}

module.exports = new FileUtils();
