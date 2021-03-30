const Router = require("express");
const router = new Router();
const itemRoute = require("./itemRoute");
const userRoute = require("./userRoute");
const brandRoute = require("./brandRoute");
const typeRoute = require("./typeRoute");
const formatRoute = require("./formatRoute");

router.use("/user", userRoute);
router.use("/type", typeRoute);
router.use("/brand", brandRoute);
router.use("/item", itemRoute);
router.use("/format", formatRoute);

module.exports = router;
