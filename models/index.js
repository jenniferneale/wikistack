var Sequelize = require('sequelize');
var db = new Sequelize('postgres://postgres@localhost:5432/wikistack',{logging:false});

const Page = db.define('page', {
	title:{
	type:Sequelize.STRING,
	allowNull:false
	},
	urlTitle: {
	type:Sequelize.TEXT,
	allowNull:false,
	isURL:true
	},
	content: {
	type:Sequelize.TEXT,
	allowNull:false
	},
	status: {
	type:Sequelize.ENUM('open', 'closed')
	},
	route: {
		type:Sequelize.VIRTUAL,
		get: function(){
			return '/wiki/' + this.urlTitle;
		}
	}/*,
	get: function(){
		return this.title;
	}*/
})

const User = db.define('user', {
  name: {
	type:Sequelize.STRING,
	allowNull:false
	},
  email: {
	type:Sequelize.STRING,
	allowNull:false,
	isEmail:true //Do we need a validation object here??
	}
})

module.exports = {
  db:db,
  Page: Page,
  User: User
}
