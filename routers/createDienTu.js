const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");

Router.get("/createdientu", (req, res) => {
    res.render("createDienTu")
})

Router.post("/createdientu", (req, res) => {
    let questionContent = req.body.questionContent
    let AnswerValue = req.body.AnswerValue
    let AnswerAContent = req.body.AnswerAContent
    let AnswerBContent = req.body.AnswerBContent
    let AnswerCContent = req.body.AnswerCContent
    let AnswerDContent = req.body.AnswerDContent
    FileController.createDienTu(questionContent, AnswerValue, AnswerAContent, AnswerBContent, AnswerCContent, AnswerDContent)
    res.send("Update Dien Tu")
})

module.exports = Router