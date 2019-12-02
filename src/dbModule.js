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

async function getOrdersFromDb(id) {
  let d = ("select * from orders where KolAvLakoch="+id);
  let orders = await d;
  return orders;
}
module.exports = {
  connectionPromise,
  getOrdersFromDb
};
