const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        res.status(400).json({message: "book get"});
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post("/", async (req, res) => {

})

router.delete("/:id", async (req, res) => {

})

module.exports = router;