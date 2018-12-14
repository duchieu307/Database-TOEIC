const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const authController = require("../controller/authController")
const passport = require('passport');


// Router.post("/", (req, res) => {
//     let username = req.body.username
//     let password = req.body.password
//     authController
//         .login(username, password)
//         .then(userInfo => {
//             //hàm login là một Promise, khi gọi hàm login, hàm login là một hàm Promise nó sẽ trả về gias trị khi nó resolve ở authController
//             //khi gọi hàm login() ở nơi khác mà sau nó có .then() thì nó sẽ trả về cái nó resolve ở bên authController
//             //{username, id,admin,test}
//             try {
//                 req.session.userInfo = userInfo;
//                 console.log(req.session.userInfo.username)
//                 res.render("home", {
//                     username: req.session.userInfo.username
//                 })
//             } catch (error) {
//             }
//         })
//         .catch(error => res.status(error.status || 500).send(error.err));
// })

Router.post('/',
    passport.authenticate('local', {
        failureRedirect: '/',
        successRedirect: '/test'
    }),

    function (req, res) {

        res.render('/', {
            username: req.user
        });
    });


Router.delete("/", (req, res) => {
    req.session.userInfo = undefined;
    req.session.destroy()
    res.send(req.session.userInfo)
})

module.exports = Router