var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: Sequelize.STRING,
  urlTitle: Sequelize.TEXT,
  content: Sequelize.TEXT,
  status: Sequelize.ENUM('open', 'closed')
})

const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})

modules.exports = {
  Page: Page,
  User: User
}
