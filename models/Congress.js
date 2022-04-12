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
        // the representative or committee that was met with
        rep_committee:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employee_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        office_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'office',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'congress',
    }
);

module.exports = Congress;