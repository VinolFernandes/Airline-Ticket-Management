const express = require("express");
const router = express.Router()
const authmiddleware = require("../../controller/Auth/authmiddleware");


// router.post("/create", async (req, res) => {
//     try {
//      const pro=   await authmiddleware.auth(req, res);
//         console.log(req.body);
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

router.get("/",(req,res)=>res.render("home.ejs",{layout:false}))

module.exports = router;