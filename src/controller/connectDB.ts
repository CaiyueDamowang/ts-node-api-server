import { Sequelize } from 'sequelize'
import { database, user, password, host, dbClient } from './DBconfig'

const connect = new Sequelize(database, user, password, {
    dialect: dbClient,
    host: host,
    define: {
        underscored: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        freezeTableName: true,
        timestamps: true
    },
    logging: false,
})

connect.authenticate().then(()=>{
    console.log(`connection has been established succesfully`)
})
.catch((err:Error) => {
    console.error(err)
})

export default connect

