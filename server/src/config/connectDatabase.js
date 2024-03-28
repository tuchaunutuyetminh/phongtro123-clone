import { Sequelize } from '@sequelize/core';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('phongtro123_clone', 'root', null, {
  host: 'localhost',
  // one of our supported dialects:
  // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
  dialect: 'mysql',
  logging: false
});

//connect db
const connectDatabase = async() => { 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default connectDatabase