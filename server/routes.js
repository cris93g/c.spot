const {
  getElectronics,
  addToCart,
  checkForUserOrAdd,
  getCart,
  updateCart,
  deleteFromCart
} = require("./controller");
module.exports = app => {
  app.get("/api/test", (req, res, next) => {
    res.sendStatus(200);
  });
  app.get("/api/electronics", electronicsCtrl.getElectronics);
  app.post("/api/addtocart", checkForUserOrAdd, addToCart);
  app.get("/api/cart", checkForUserOrAdd, getCart);
};
