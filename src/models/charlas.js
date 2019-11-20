import Sequelize from 'sequelize'
import sequelize from './conexion'
import expositorsModel from './expositors'


const charlasModel = sequelize.define('charlas', {
   
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tags: {
      type: Sequelize.STRING,
      allowNull: false
    },
    expositorId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

charlasModel.belongsTo(expositorsModel)

export default charlasModel;