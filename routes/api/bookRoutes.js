const router = require("express").Router();
const googleBooks = require("./../../models/books")

router.get("/", async (req, res) => {
    try {
        const googlebooks = await googleBooks.find();
        res.json(googlebooks);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

router.post("/", async (req, res) => {
    const books = new googleBooks({
        bookId: req.body.bookId,
        authors: req.body.authors, 
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
        title: req.body.title
    })

    try {
        const newBooks = await books.save()
        res.status(200).json(newBooks)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        await googleBooks.deleteOne({bookId: req.params.id})
        res.status(200).json({message: "Deleted data!"})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = router;