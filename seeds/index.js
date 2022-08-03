const users = require('./users');
const {User} = require('../models');
const seedPatients = require('./patients');

const sequelize = require('../config/connection');



const seeder = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await User.bulkCreate(users, {
        individualHooks: true,
    });
    await seedPatients();
    console.log('\n----- Patients SEEDED -----\n');

    process.exit(0);
  };
  





(async () => {
    await seeder();
})();