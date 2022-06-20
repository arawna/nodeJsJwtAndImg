const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.post("/add", (req,res) => {
    if(req.files) {
        req.files.img.name = `${uuidv4()}.${req.files.img.name.split(".")[req.files.img.name.split(".").length -1]}`;
        fs.writeFile(`./public/${req.files.img.name}`,req.files.img.data, (err) => {
            if(err) {
                res.status(500).json({
                    status:false,
                    message: err,
                    path:null
                })
            }else{
                res.json({
                    status:true,
                    message:"Image uploaded",
                    path: `./public/${req.files.img.name}`
                })
            }
        })
    }
})

router.post("/getImg", (req,res) => {
    fs.readFile(req.body.path, (err,data) => {
        if(err) {
            res.status(500).json({
                status:false,
                message: err,
                data:null
            })
        }else{
            res.json({
                status:true,
                message:"Image read",
                data: data.toString("base64")
            })
        }
    })
})

module.exports = router;