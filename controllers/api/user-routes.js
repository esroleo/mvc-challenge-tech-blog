const router = require('express').Router();
//const { User, Post, Vote, Comment } = require('../../models');
const { User } = require('../../models');




// GET /api/users
router.get('/',  (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
        attributes: {exclude : ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



  // POST /api/users - equal to insert
router.post('/', (req, res) => {
    // expects {username: 'test', email: 'test@gmail.com', password: 'test'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
      
        res.json(dbUserData);
      });
    })

  });

  module.exports = router;