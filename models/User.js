const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [6],
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        hooks: {
            beforeCreate: async (user) => {
                try {
                    const hashedPassword = await bcrypt.hash(user.password, 8);
                    user.password = hashedPassword;
                    return user;
                } catch (error) {
                    throw new Error(error);
                }
            },
            beforeUpdate: async (user) => {
                if(user.password.trim().length > 0){
                    try {
                        const hashedPassword = await bcrypt.hash(user.password, 8);
                        user.password = hashedPassword;
                        return user;
                    } catch (error) {
                        throw new Error(error);
                    }
                }
            },
        }
    }
);

module.exports = User;