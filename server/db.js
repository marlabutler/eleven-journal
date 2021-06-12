const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:3a088ad8cb9b4fc2990536abe5ea82a1@localhost:5432/eleven-journal");

module.exports = sequelize;