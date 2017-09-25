var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack'
,{logging:false}
);

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
	},
},
	{
	hooks:{
	beforeValidate: function(obj) {
		if (obj.title) {
			// Removes all non-alphanumeric characters from title
			// And make whitespace underscore
			obj.urlTitle = obj.title.replace(/\s+/g, '_').replace(/\W/g, '');
		} else {
			// Generates random 5 letter string
			obj.urlTitle = Math.random().toString(36).substring(2, 7);//Should use a query later to have incremented number, not random!
		}//end else
	}//end function
	}//end hook
	}//end object
	);


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

Page.belongsTo(User, {as: 'author'})

module.exports = {
  db:db,
  Page: Page,
  User: User
}
