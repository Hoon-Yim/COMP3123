const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/hello", controller.getHello);
router.get("/user", controller.getUser);
router.post("/user/:firstname/:lastname", controller.postUser);

module.exports = router;