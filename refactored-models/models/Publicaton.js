const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Publication extends Model {};

Publication.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pub_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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
            validate: {
                isEmail: true
            }
        },
        authors: {
            type: DataTypes.TEXT,
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
        modelName: 'publication'
    }
);

module.exports = Publication;