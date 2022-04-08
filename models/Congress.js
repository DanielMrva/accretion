const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Congress extends Model {}

Congress.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        reps_comm: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        names: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
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
        modelName: 'congress'
    }
);

module.exports = Congress;