import Sequelize from 'sequelize'
import sequelize from './conexion'

const expositorsModel = sequelize.define('expositors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuenta_github: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default expositorsModel;