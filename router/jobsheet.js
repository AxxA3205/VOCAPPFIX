const jobsheetController = require("../controllers/jobsheet");
const router = require("express").Router();

// router.post("/one", jobsheetController.subitOne);
router.post("/quiz", jobsheetController.submitMany);

module.exports = router;
