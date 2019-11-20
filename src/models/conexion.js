import Sequelize from 'sequelize'

const sequelize = new Sequelize('evento_tech_day', 'root', 'Luisnovapi132009', {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')

  })
  .catch(err => {
    console.log('No se conecto')
  })

  export default sequelize;