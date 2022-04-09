const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meeting extends Model {};

Meeting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // the name of thae meeting or achievement
        mtg_ach: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        employee_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        office_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'office',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'meeting',
    }
);

module.exports = Meeting;