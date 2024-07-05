const fs = require("fs");
const path = require("path");

class FileUtils {
  uploadFile(file, fileName) {
    const validation = fileValidation(file);
    if (!validation) {
      return false;
    }
    file.mv(path.resolve(__dirname, "../static/", fileName), (err) => {
      if (err) throw err;
      console.log("File created successfully");
    });
  }

  deleteFile(path) {
    fs.unlink(path, (err) => {
      if (err) throw err;
      console.log("File deleted successfully");
    });
  }
}

const fileValidation = (file) => {
  const allowingExtensions = /(\.jpg|\.jpeg|\.png|\.svg|\.bmp)&/i;
  if (!allowingExtensions.exec(file)) {
    console.log("Invalid file type");
    return false;
  }
  return true;
};

module.exports = new FileUtils();
