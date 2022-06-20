const router = require('express').Router();

router.get("/get", (req,res,next) => {
    res.json({
        status: true,
        message: req.decode
    })
})

router.post("/post", (req,res,next) => {
    res.json({
        status: true,
        message: "Employee created"
    })
})

module.exports = router;