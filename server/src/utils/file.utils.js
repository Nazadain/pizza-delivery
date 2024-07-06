const fs = require("fs");
const path = require("path");

class FileUtils {
  uploadFile(file, fileName) {
    file.mv(path.resolve(__dirname, "../static/", fileName), (err) => {
      if (err) throw err;
      console.log("File created successfully");
    });
  }

  deleteFile(path) {
    if (fs.existsSync(path)) {
      fs.unlink(path, (err) => {
        if (err) throw err;
        console.log("File deleted successfully");
      });
    }
  }
}

module.exports = new FileUtils();
