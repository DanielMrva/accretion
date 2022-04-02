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
        emp_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        off_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'office',
                key: 'id'
            }
        },
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