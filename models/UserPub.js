const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class UserPub extends Model {}

UserPub.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        emp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        pub_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "publication",
                key: "id"
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "userPub",
    }
);

module.exports = UserPub;