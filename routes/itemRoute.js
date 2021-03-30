const Router = require("express");
const router = new Router();
const itemController = require("../controlles/itemController");

router.post("/", itemController.create);
router.get("/", itemController.getAll);
router.get("/:id", itemController.getOne);
module.exports = router;
