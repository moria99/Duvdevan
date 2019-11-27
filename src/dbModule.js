const mysql = require('promise-mysql');

let db;

let connectionPromise = mysql.createPool({ //create conected to the data base
    connectionLimit: 100,
    host: "localhost",
    user: "",
    password: "",
    database: ""
  })
  .then((c) => { //it happend after the conection success
    db = c;
  })
  .catch((e) => {
    console.error(e);
  });

module.exports = {
  connectionPromise
};
