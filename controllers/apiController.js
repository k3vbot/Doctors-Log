const router = require('express').Router();
const {patient, User} = require('../models');
const bcrypt = require('bcryptjs');
const passport = require("../config/passport");

// /api prepended

router.post('/signin', passport.authenticate("local"), async (req, res) => {
    try {
        res.json({
            user_id: req.user.user_id,
            password: req.user.password
          });

    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});


router.post('/patients', async (req, res) => {
    try {
        const newPatient = await patient.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            DOB: req.body.DOB,
            gender: req.body.gender,
            postal_code: req.body.postal_code,
            Description: req.body.Description,
            Appointment_Date: req.body.Appointment_Date,
            user_id: req.user.user_id,
        });

        res.json(newPatient);
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});

 

// post signup data to database
router.post('/signup', async (req, res) => {
    try {
        // adds signup data to database
        // post data: { username: '', password: ''}
        const newUser = await User.create(req.body);

        // saves user session with new user data
        req.session.save(() => {
            req.session.user = newUser;
            req.session.isLoggedIn = true;
            res.json(newUser);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});



router.post('/signout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

router.get('/patients', (req, res) => {


    try {
    // find all patients
    patient.findAll({})
   .then(dbPatientData => res.json(dbPatientData))}
   catch (error) {
    console.error(error);
    res.status(500).json({error});
}
});

router.get('/users', (req, res) => {

    if(!req.session.isLoggedIn){
        res.status(401).json({error: 'You must be logged in to do that'});
    }
    try {
    // find all patients
    User.findAll({})
   .then(dbPatientData => res.json(dbPatientData))}
   catch (error) {
    console.error(error);
    res.status(500).json({error});
}
});

router.get('/patients/:id', (req, res) => {
    try {
    // find a single patient by its `id`
    patient.findOne({
      where: {
        patient_id: req.params.id
      }
    })
      .then(dbPatientData => res.json(dbPatientData)
      )}
      catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
  });



router.delete('/patients/:id', (req, res) => {


    try {
    // delete on tag by its `id` value
    patient.destroy({
      where: {
        patient_id: req.params.id
      }
    })
    .then(dbPatientData => {
      if (!dbPatientData) {
        res.status(404).json({message: 'No patient found with this id'});
        return;
      }
      res.json(dbPatientData);
    })}
    catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
  });


  router.delete('/users/:id', (req, res) => {

    try {
    // delete on tag by its `id` value
    User.destroy({
      where: {
        user_id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({message: 'No user found with this id'});
        return;
      }
      res.json(dbUserData);
    })}
    catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
  });


module.exports = router;