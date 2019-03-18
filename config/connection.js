const mysql = require("mysql");
const keys = require("../login.js")
const password = keys.mySQL.pass
// Creates connection to MYSQL Database
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "bb341b64706ddc",

    // Your password
    password: "d31463ce",
    database: "heroku_22ad994ed484a71"
});

module.exports = connection;

// mysql://bb341b64706ddc:d31463ce@us-cdbr-iron-east-03.cleardb.net/heroku_22ad994ed484a71?reconnect=true