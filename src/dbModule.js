
const mssql = require('mssql');

let db;

    let connectionPromise = mssql.connect({ //create conected to the data base
    //connectionLimit: 100,
   // host: "localhost",
    user: "duvdevan2",
    // ""
    //server: "DESKTOP-2G2D206\\SQLEXPRESS",
    password: "Duvdevan1!!",
    // ""
    database: "Duvdevan"
    // "DuvdevanDB"
  })
  .then((c) => { //it happened after the conection success
    db = c;
  })
  .catch((e) => {
    console.error(e);
  });

async function getOrdersFromDb(id) {
  let d = ("select * from orders where KolAvLakoch=" + id);
  let orders = await d;
  return orders;
}
module.exports = {
  connectionPromise,
  getOrdersFromDb
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
  console.log(newUser);
  let c = db.query('insert into tblusers values ("' + newUser.userName + '", "' + newUser.password + '" , "' + newUser.companyNumber + '" , "' + newUser.phone + '" , "' + newUser.email + '" , "' + newUser.clientCode + '")');
  let isRegistered = await c;
  console.log(isRegistered);
  return isRegistered;
}
