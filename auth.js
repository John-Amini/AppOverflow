const db = require('./db/models');

const loginUser = (req, res, user) => {
    console.log(`session-auth: ${req.session.auth}`)
    req.session.auth = {
        userId: user.id,
    };
    console.log(`session-auth-declared: ${req.session.auth}`)
};

const restoreUser = async (req, res, next) => {


    if (req.session.auth) {
      const { userId } = req.session.auth;

      try {
        const user = await db.User.findByPk(userId);

        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
          next();
        }
      } catch (err) {
        res.locals.authenticated = false;
        next(err);
      }
    } else {
      res.locals.authenticated = false;
      next();
    }
  };

  const logoutUser = (req, res) => {
    delete req.session.auth
  }

  const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
      return res.redirect('/users/login');
    }
    return next();
  };

  module.exports = {
    loginUser,
    restoreUser,
    logoutUser,
    requireAuth
  };