const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Meeting extends Model {}

Meeting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mtg_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        emp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        off_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "office",
                key: "id"
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