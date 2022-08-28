const CollationController = require("./controllers");
const { Router } = require("express");

const router = Router();

router.post("/collate", CollationController.createItem);
router.get("/all", CollationController.getAllUnlaunchedItems);
router.get("/item/:id", CollationController.getItem);
