const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

let app = express();
let home = require("./routers/home")
let createUser = require("./routers/createUser")
let createTracNghiem = require("./routers/createTracNghiem")
let createDienTu = require("./routers/createDienTu")
let createBaiDoc = require("./routers/createBaiDoc")

app.use(bodyParser.urlencoded({ extended: false }))

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use("/", home)
app.use("/", createUser)
app.use("/", createTracNghiem)
app.use("/", createDienTu)
app.use("/", createBaiDoc)

app.use(express.static("public"));

mongoose.connect('mongodb://localhost/howtotoeic', (err) => {
    if (err) console.log(err);
    console.log("Database connected")
});

app.listen(5000, (err) => {
    if (err) { console.log(err) };
    console.log("App listen at 5000")
})