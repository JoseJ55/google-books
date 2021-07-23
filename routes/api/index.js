const router = require("express").Router();
const bookRoute = require("./bookRoutes");

router.use("/book", bookRoute)

module.exports = router;