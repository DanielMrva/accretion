const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class UserMeeting extends Model {}

UserMeeting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        meeting_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "meeting",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "userMeeting",
    }
);

module.exports = UserMeeting;