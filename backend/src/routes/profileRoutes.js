const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/me", protect, (req, res) => {
  res.json({
    id: req.user._id,
    email: req.user.email,
  });
});

module.exports = router;
