const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', async (req, res, next) => {  
  const user = req.session.currentUser;
  res.render('index', {user});
});

module.exports = router;