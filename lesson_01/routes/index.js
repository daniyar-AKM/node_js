// function sayHello(){
//   console.log("Hello")
// }

// module.exports = sayHello;

const dbRoutes = require('./dbRoutes');

module.exports = function(app,db){
  dbRoutes(app, db)
}