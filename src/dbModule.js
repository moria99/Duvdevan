const mysql = require('ms-sql');

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
 async function getOrderFromDb(id){
  let d = db.query("select * from orders where KodAvLakoach="+id);
let orders= await d;
return orders
}
module.exports = {
  connectionPromise,
  getOrderFromDb
};
