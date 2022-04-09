const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Publication extends Model {}

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
            allowNull: false,
        },
        pub_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        keywords: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        article_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_contrib: {
            type: DataTypes.STRING,
            allowNull: true,
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
        modelName: 'publication',
    }
);

module.exports = Publication;