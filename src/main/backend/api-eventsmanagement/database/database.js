const Sequelize = require('sequelize')

const conn = new Sequelize('eventsmanagement', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;