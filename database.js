const Sequelize=require('sequelize');
const sequelize=new Sequelize('blog','root','password',{
	dialect: 'mysql',
  host: 'localhost'
});
module.exports = sequelize;