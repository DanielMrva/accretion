const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Media extends Model {}

Media.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        outlet: {
            type: DataTypes.STRING,
            allowNull: true,
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
        modelName: 'media',
    }
);

module.exports = Media;