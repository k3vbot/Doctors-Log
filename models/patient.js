const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class patient extends Model {}

patient.init(
  {
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    DOB:{
        type: DataTypes.DATE,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        validate: {
         isIn: [[
          'FEMALE',
          'MALE'
         ]],
        }
       },
    postal_code:{
        type: DataTypes.INTEGER,
    },
    Description:{
        type: DataTypes.STRING,
    },
    Appointment_Date:{
        type: DataTypes.DATE,
    },
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      },
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patients',
  }
);

module.exports = patient;