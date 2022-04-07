const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Achievement extends Model {}

Achievement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        achievement_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_received: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        names: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        office_id: {
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
        modelName: 'achievement',
    }
);

module.exports = Achievement;