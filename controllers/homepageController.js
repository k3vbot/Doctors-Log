const router = require('express').Router();
const apiController = require('./apiController');
const {User} = require('../models');
const {patient} = require('./../models');
const passport = require("../config/passport");
const isAuthenticated = require('../config/middleware/isAuthenticated');

// renders signup/landing page
router.get('/', isAuthenticated, (req,res) => {
    res.render('landingPage', {
        isLoggedIn: req.session.isLoggedIn,
    });
});

router.get('/signin', isAuthenticated, (req,res) => {
    res.render('signin', {
        isLoggedIn: req.session.isLoggedIn,
    });
});
router.get('/signup', isAuthenticated, (req,res) => {
    res.render('signup', {
        isLoggedIn: req.session.isLoggedIn,
    });
});
router.get('/newPatient', isAuthenticated, (req, res) => {
    res.render('newPatient', {
        isLoggedIn: req.session.isLoggedIn,
    });
});

// renders users page using user database data
router.get('/users', async (req, res) => {
    try {
        const dbUsersData = await User.findAll();
        // map db data to plain json
        const users = dbUsersData.map(dbUser => dbUser.get({plain: true}));
        console.log(users);
        res.render('users', {
            users,
            loggedInUser: req.session.user || null,
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        console.log('Err L:25 homepageController', error);
        res.status(500).json({error});
    }
});

// renders user profile page given a user id
router.get('/users/:userId', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.userId);
        const user = userData.get({plain: true});

        res.render('userProfile', {user});
    } catch (error) {
        res.status(500).json({error});
    }
});

router.get('/patientList', async (req, res) => {
    try {
        const patientList = await patient.findAll();
        console.log(patientList);
        res.render('patientList', { patient });
    } catch (error) {
        res.status(500).json({error});
    }
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



router.get('/newPatient', async (req, res) => {
    try {
        res.render('newPatient',{});

    } catch (error) {
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
        });

        res.json(newPatient);
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});




// sends routes w/ /api to apiController.js file
router.use('/api', apiController);

module.exports = router;