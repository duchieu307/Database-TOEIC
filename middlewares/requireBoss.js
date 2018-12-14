module.exports = (req, res, next) => {
  console.log("da vao mdw",req.user.type);
  if (!(req.user.admin)) {
    return res.redirect('/notAuth');
  }
  next();
};
