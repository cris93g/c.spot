module.exports = {
  getElectronics(req, res) {
    const db = req.app.get("db");
    db.electronics
      .find()
      .then(electronics => res.status(200).json(electronics))
      .catch(console.log);
  },
  addToCart(req, res) {
    const db = req.app.get("db");
    let { id, quantity } = req.body;
    db.cart
      .insert({
        electronics_id: id,
        quantity,

        user_id: req.session.user.id
      })
      .then(resp => {
        return res.status(200).json(resp);
      })
      .catch(console.log);
  },
  checkForUserOrAdd(req, res, next) {
    if (req.session.user) {
      return next();
    } else {
      const db = req.app.get("db");
      db.customer.insert({ session_id: req.sessionID }).then(user => {
        req.session.user = user;
        return next();
      });
    }
  },
  getCart(req, res) {
    const db = req.app.get("db");
    db.getCart(req.session.user.id)
      .then(cart => {
        console.log("cart: ", cart);
        return res.status(200).json(cart);
      })
      .catch(console.log);
  }
};
