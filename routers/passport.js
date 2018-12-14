const passport = require('passport');
const mongoose = require('mongoose');

const LocalStrategy = require('passport-local').Strategy;
const dataSchema = require("../models/dataSchema")
const fileController = require("../controller/fileController");
const bcrypt = require('bcrypt');
passport.serializeUser((user, done) => {
  console.log('user rrrr ', user.id11);
  done(null, user.id);
});

passport.deserializeUser((_id, done) => {
  dataSchema.userInfo.findById(_id).then(user => {
    done(null, user);
  });
});


passport.use(new LocalStrategy(
  async (username, password, done) => {
    console.log("Aaaaa");
    const data = await fileController.findUserByName(username);
    if (data) {
      console.log(data);
      bcrypt.compare(password, data.userPassword, (err, res) => {
        if (res) {
          console.log(res);
          return done(null, data);
        } else {
          console.log("sai p");
          return done(null, false);
        }
      })
    } else {
      return done(null, false);
    }
  }
))