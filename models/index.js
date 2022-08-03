const User = require('./User');
const patient = require('./patient');



// Patients belongsTo User
patient.belongsTo(User, {
    foreignKey: 'user_id',
  });

  // User have many Patients
  User.hasMany(patient, {
    foreignKey: 'user_id',
  });




module.exports = {
    User,
    patient,
};