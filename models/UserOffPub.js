const { Model, DataTypes} = require('sequelize');
const sequelize = require('..config/connection');


class UserOffPub extends Model {}

UserOffPub.init(
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
            referances: {
                model: "user",
                key: "id"
            }
        },
        office_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            referances: {
                model: "office",
                key: "id"
            }
        },
        pub_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            referances: {
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
        modelName: "userOffPub",
    }
);

module.exports = UserOffPub;