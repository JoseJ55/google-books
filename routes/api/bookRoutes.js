const router = require("express").Router();
const googleBooks = require("./../../models/books")

router.get("/", async (req, res) => {
    try {
        const googlebooks = await googleBooks.find();
        if (googlebooks.length === 0) {
            res.json([])
            return;
        }
        res.json(googlebooks);
        return;
    } catch (error) {
        res.status(500).json({message: error.message});
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
        res.status(400).json({message: err.errors.title.properties.message})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        await googleBooks.deleteOne({bookId: req.params.id})
        .then((response) => {
            if(response.deletedCount === 1) {
                res.status(200).json({message: "Deleted data!"})
                return;
            }
            if(response.deletedCount === 0) {
                res.status(201).json({message: "Data does not exist!"})
                return;
            }
            
            throw "Could not delete data";
        })
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = router;