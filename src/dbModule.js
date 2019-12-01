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
  .then((c) => { //it happened after the conection success
    db = c;
  })
  .catch((e) => {
    console.error(e);
  });


module.exports = {
  connectionPromise,
  insertNewUser,
  getOrderFromDb,
  getAllPrices,
  getCastingType,
  getConcreteType,
  getAdvancedType1,
  getAdvancedType2,
  getAdvancedType3,
  getAdvancedType4,
  getAdvancedType5,
  getPumpType,
  getTotal
};

async function getCastingType(req, res) {
  let sugYetzika = await db.query("SELECT TOP (100) PERCENT SugYetzika FROM  dbo.AtblHovala WHERE (SugYetzika IS NOT NULL) ORDER BY SugYetzika");
  return sugYetzika;
}
async function getConcreteType(req, res) {
  let teurParit = await db.query("SELECT TOP (100) PERCENT KodParit,TeurParit FROM  dbo.AtblPritimBeton WHERE (TeurParit IS NOT NULL) ORDER BY TeurParit");
  return teurParit;
}
async function getAdvancedType1(req, res) {
  let sugBeton = await db.query("SELECT TOP (100) PERCENT KodParit,SugBeton FROM  dbo.AtblPritimBeton WHERE (SugBeton IS NOT NULL) ORDER BY SugBeton");
  return sugBeton;
}
async function getAdvancedType2(req, res) {
  let chozek = await db.query("SELECT TOP (100) PERCENT KodParit,SugBeton FROM  dbo.AtblPritimBeton WHERE (SugBeton IS NOT NULL) ORDER BY SugBeton");
  return chozek;
}
async function getAdvancedType3(req, res) {
  let tzorechBeton = await db.query("SELECT TOP (100) PERCENT KodParit,TzorechBeton FROM  dbo.AtblPritimBeton WHERE (SugBeton IS NOT NULL) ORDER BY TzorechBeton");
  return tzorechBeton;
}
async function getAdvancedType4(req, res) {
  let dargatChasifa = await db.query("SELECT TOP (100) PERCENT KodParit,DargatChasifa FROM  dbo.AtblPritimBeton WHERE (SugBeton IS NOT NULL) ORDER BY DargatChasifa");
  return dargatChasifa;
}
async function getAdvancedType5(req, res) {
  let somechBeton = await db.query("SELECT TOP (100) PERCENT KodParit,SomechBeton FROM  dbo.AtblPritimBeton WHERE (SugBeton IS NOT NULL) ORDER BY SomechBeton");
  return somechBeton;
}
async function getPumpType(req, res) {
  let sugSchora = await db.query("SELECT TOP (100) PERCENT SugSchora FROM  dbo.AtblHovala WHERE (SugSchora IS NOT NULL) ORDER BY SugSchora");
  return sugSchora;
}

async function getOrderFromDb(id) {
  let d = db.query("select * from orders where KodAvLakoach=" + id);
  let orders = await d;
  return orders
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
async function insertNewUser(newUser) {
  let c = db.query('insert into tblUsers values (' + newUser.UserName + ',' + newUser.PassName + ',' + newUser.HetPey + ',' + newUser.Selolar + ',' + newUser.EMail + ',' + newUser.KodLakoach+')');
  let isRegistered = await c;
  return isRegistered;
}
