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
        author_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_contrib: {
            type: DataTypes.STRING,
            allowNull: true,
        },
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