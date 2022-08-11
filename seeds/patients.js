const { patient } = require('../models');

const patientData = [
  {
    user_id: 1,
    patient_id:1,
    first_last_name:'Mike Doe',
    DOB:'1956-02-24',
    gender:'MALE',
    postal_code:95127,
    Description:'cannot eat, very sleepy',
    Appointment_Date:'2022-08-19'
  },
  {
    user_id: 1,
    patient_id:2,
    first_last_name:'Dorthy Miles',
    DOB:'1987-05-11',
    gender:'FEMALE',
    postal_code:11561,
    Description:'left leg broken',
    Appointment_Date:'2022-08-20'
  },
  {
    user_id: 2,
    patient_id:3,
    first_last_name:'Chris Berg',
    DOB:'1999-12-01',
    gender:'MALE',
    postal_code:37849,
    Description:'Covid-19',
    Appointment_Date:'2022-08-19'
  },
  {
    user_id: 2,
    patient_id:4,
    first_last_name:'Lee Hwang',
    DOB:'1979-12-22',
    gender:'MALE',
    postal_code:94580,
    Description:'Covid-19',
    Appointment_Date:'2022-08-22'  
},
  {
    user_id: 3,
    patient_id:5,
    first_last_name:'Ann King',
    DOB:'1965-11-03',
    gender:'FEMALE',
    postal_code:10598,
    Description:'Covid-19',
    Appointment_Date:'2022-08-22'    
},
];

const seedPatients = () => patient.bulkCreate(patientData);

module.exports = seedPatients;