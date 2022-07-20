const express = require("express");
const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        return res.status(200).json({ webapp: "percent of complete Eth-Dev-Program" });
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;