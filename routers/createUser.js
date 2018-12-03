const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");

Router.get("/createuser", (req, res) => {
    res.render("createUser")
})

Router.post("/createuser", (req, res) => {
    let FirstName = req.body.FirstName;
    let LastName = req.body.LastName;
    let UserName = req.body.UserName;
    let Password = req.body.Password;
    let DoB = req.body.DoB;
    let Phone = req.body.Phone;
    let Email = req.body.Email;
    let Address = req.body.Address
    FileController.creatUser(FirstName, LastName, UserName, Password, Email, DoB, Phone, Address)
    res.send("Tao User thanh cong")

})

module.exports = Router