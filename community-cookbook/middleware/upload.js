const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Set storage engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const dir = './uploads';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|webp/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
});

// Process uploaded image
const processImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    // Resize and optimize image
    const resizedImagePath = `./uploads/resized-${req.file.filename}`;
    await sharp(req.file.path)
      .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(resizedImagePath);

    // Replace original file with resized version
    fs.unlinkSync(req.file.path);
    fs.renameSync(resizedImagePath, req.file.path);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadSingle: (fieldName) => [upload.single(fieldName), processImage],
  uploadMultiple: (fieldName, maxCount) => [upload.array(fieldName, maxCount), processImage]
};