const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserMedia extends Model {}

UserMedia.init(
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
        media_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "media",
                key: "id"
            }
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "userMedia"
    }
);

module.exports = UserMedia;