module.exports = function fileValidation(req, res, next) {
  const { img } = req.files;
  const allowingExtensions = "jpeg|png|jpg|svg+xml|avif";
  const types = allowingExtensions.split("|");
  const fileType = img.mimetype.split("/")[1];
  console.log(fileType);
  const maxSize = 1024 * 1024 * 10; //10MB
  if (img.size > maxSize) {
    return res.status(400).json({ message: "Wrong file size" });
  }
  for (type of types) {
    if (type === fileType) {
      return next();
    }
  }
  return res.status(400).json({ message: "Wrong file type" });
};
