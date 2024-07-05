module.exports = function fileValidation(req, res, next) {
  const { img } = req.files;
  const allowingExtensions = "jpeg|png|jpg|svg";
  const types = allowingExtensions.split("|");
  const fileType = img.mimetype.split("/")[1];
  const maxSize = 1024 * 1024 * 5; //5MB
  if (img.size > maxSize) {
    return res.status(400).json({ message: "Wrong file size" });
  }
  for (type of types) {
    if (type === fileType) {
      next();
    }
  }
  return res.status(400).json({ message: "Wrong file type" });
};
