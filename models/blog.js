const Sequelize=require('sequelize');
const sequelize=require('../database');
const Blog=sequelize.define('blog',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		allowNull:false,
		primaryKey:true
	},
	title:{
		type:Sequelize.STRING,
		allowNull:false
	},
description:{
		type:Sequelize.STRING,
		allowNull:false
	},
	author:{
		type:Sequelize.STRING,
		allowNull:false
	}

});
module.exports=Blog;