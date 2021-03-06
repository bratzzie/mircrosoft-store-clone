const Router = require("express");
const router = new Router();
const brandController = require("../controlles/brandController");
const checkRole = require("../middleware/authRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll);
module.exports = router;
