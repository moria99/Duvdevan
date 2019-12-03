//const mysql = require('promise-mysql');
const mssql = require('mssql');

let db;

// let connectionPromise = mysql.createPool({
let connectionPromise = mssql.connect({ //create conected to the data base
    // connectionLimit: 100,
    // host: "localhost",
    user: "zaq",
    // server: "DESKTOP-2G2D206\\SQLEXPRESS",
    server: "localhost",
    password: "zaq21wsx!",
    // "beitar",
    database: "Duvdevan"
    // "duvdevan"
    // "DuvdevanDB"
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
  getPumpType,
  pushDetailsForm,
  getTotal
};

async function getCastingType() {
  let sugYetzika = await db.query("SELECT TOP (100) PERCENT KodParit,TeurParit FROM  dbo.AtblSugYetzika WHERE (TeurParit IS NOT NULL) ORDER BY TeurParit");
  return sugYetzika;
}
async function getConcreteType() {
  let pritimBeton = await db.query("SELECT TOP (100) PERCENT  KodParit,TeurParit,SugBeton,Chozek,TzorechBeton,DargatChasifa,SomechBeton FROM  dbo.AtblPritimBeton WHERE (TeurParit IS NOT NULL) ORDER BY TeurParit");
  return pritimBeton;
}
async function getPumpType() {
  let pritimMasheva = await db.query("SELECT TOP (100) PERCENT KodParit,TeurParit FROM  dbo.AtblPritimMasheva WHERE (TeurParit IS NOT NULL) ORDER BY TeurParit");
  return pritimMasheva;
}
async function pushDetailsForm(f) {

  let newForm = await db.query(`insert into dbo.AtblHovala (ShemLakoach,THovala,SHatchalatHovala,SugYetzika,KamutSchora,Plus,KodParitBeton,SugSchora,KamutNosefet) values (
    "${f.street}+' '+${f.houseNumber}+' '+${f.city}","${f.date}","${f.time}",
    "${f.sugYetzika.KodParit}","${f.quantity}","${f.isPlus}","${f.pritimBeton.KodParit}","${f.pritimMasheva.KodParit}",${f.hoseLength}")`);
}

async function getOrderFromDb(id) {
  let d = db.query("select * from dbo.AtblHovala where KodAvLakoach=" + id);
  let orders = await d;
  return orders
}

async function getAllPrices() {
  let d = db.query("select * from tblHMehirShura");
  let data = await d;
  console.log(data);
  return data;
}

async function getTotal() {
  let d = db.query('SELECT MisHeshbonit,sachLifney,Hanacha,sachAcharey,Maham,SachHakolKolel FROM tblHMehir');
  // WHERE  MisHeshbonit = 111
  let data = await d;
  console.log(data);
  return data;

}
async function insertNewUser(newUser) {
  console.log(newUser);

  // let c = db.query('insert into dbo.tblUsers (UserName ,PassName, HetPey, Selolar, EMail, KodLakoach) values ("' + newUser.userName + '", "' + newUser.password + '" , "' + newUser.companyNumber + '" , "' + newUser.phone + '" , "' + newUser.email + '" , "' + newUser.clientCode + '")');

  let c = db.query("insert into dbo.tblUsers values ('" + newUser.userName + "', '" + newUser.password + "' , '" + newUser.companyNumber + "' , '" + newUser.phone + "' , '" + newUser.email + "')");
  // , '" + newUser.clientCode + "'

  let isRegistered = await c;
  console.log(isRegistered);
  return isRegistered;
}
