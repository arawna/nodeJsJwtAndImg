const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post("/getToken", (req,res) => {
    const {userName, password} = req.body;
    if(userName === "ali" && password === "123456") {
        const payLoad = {
            userName,
            password,
            email: "deneme@gmail.com"
        }
        const token = jwt.sign(payLoad, req.app.get("api_secret_key"), { expiresIn: 120 });
        res.json({
            status: true,
            token
        })
    }else {
        res.status(401).json({
            status: false,
            token: null
        })
    }
})

module.exports = router;