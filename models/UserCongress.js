const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCongress extends Model {}

UserCongress.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        emp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        congress_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "congress",
                key: "id"
            }
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "userCongress"
    }
);

module.exports = UserCongress;