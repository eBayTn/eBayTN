const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/get", itemController.selectAll);
router.post("/post", itemController.insert);
router.delete("/delete/:id", itemController.deletePro);
module.exports = router;
