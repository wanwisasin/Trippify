const router = require('express').Router();
const passport = require('passport');

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/auth/failure',
  })
);

router.get('/user', (req, res) => {
  if (req.user) res.json(req.user);
  else res.status(401).json({ message: 'Not Authenticated' });
});

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect(process.env.CLIENT_URL);
  });
});
router.get('/user', (req, res) => {
  if (req.user) {
    res.json(req.user); 
  } else {
    res.status(401).json({ message: 'Not Authenticated' });
  }
});

module.exports = router;
