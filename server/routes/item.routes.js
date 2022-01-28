const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/get", itemController.selectAll);
router.post("/post", itemController.insert);
module.exports = router;
