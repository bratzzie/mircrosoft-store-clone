const Router = require("express");
const router = new Router();
const typeController = require("../controlles/typeController");
const checkRole = require("../middleware/authRoleMiddleware");

router.post("/", checkRole("ADMIN"), typeController.create);
router.get("/", typeController.getAll);
module.exports = router;
