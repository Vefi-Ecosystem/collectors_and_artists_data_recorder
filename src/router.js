const CollationController = require("./controllers");
const { Router } = require("express");

const router = Router();

router.post("/collate", CollationController.createItem);
router.get("/all", CollationController.getAllItems);
router.get("/item/:id", CollationController.getItem);

module.exports = router;
