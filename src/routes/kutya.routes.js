const express = require("express");
const {
  listKutyak,
  getKutya,
  createKutya,
} = require("../controllers/kutya.controller");

const router = express.Router();

router.get("/api/kutyak", listKutyak);
router.get("/api/kutyak/:id", getKutya);
router.post("/api/kutyak", createKutya);

module.exports = router;
