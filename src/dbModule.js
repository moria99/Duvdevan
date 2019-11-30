const mysql = require('promise-mysql');
//const mssql = require('mssql');

let db;

 let connectionPromise = mysql.createPool({
//let connectionPromise = mssql.connect({ //create conected to the data base
    connectionLimit: 100,
    host: "localhost",
    user: "",
    //server: "DESKTOP-2G2D206\\SQLEXPRESS",
    password: "",
    database: "DuvdevanDB"
  })
  .then((c) => { //it happend after the conection success
    db = c;
  })
  .catch((e) => {
    console.error(e);
  });

  
module.exports = {
  connectionPromise,
  getOrderFromDb,
  getOptionOfCasting,
  getOptionOfisConcrete,
  getAllPrices,
  getTotal
};

async function getOrderFromDb(id) {
  let d = db.query("select * from orders where KodAvLakoach=" + id);
  let orders = await d;
  return orders
}
async function getOptionOfCasting(req, res) {
  let c = db.query()
  let Casting = await c;
  return Casting;
}
async function getOptionOfisConcrete(req, res) {
  let c = db.query('select [KodParit],[TeurParit] from [AtblPritimBeton]')
  let isConcrete = await c;
  return isConcrete;
}

async function getAllPrices(req, res) {
  let d = db.query("select * from tblHMehir");
  let data = await d;
  return data;
}

async function getTotal(req, res) {
  let d = db.query("select * from tblHMehirShura");
  let data = await d;
  return data;
}
