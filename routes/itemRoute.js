const Router = require("express");
const router = new Router();
const itemController = require("../controlles/itemController");
const checkRole = require("../middleware/authRoleMiddleware");

router.post("/", checkRole("ADMIN"), itemController.create);
router.get("/", itemController.getAll);
router.get("/:id", itemController.getOne);
module.exports = router;
