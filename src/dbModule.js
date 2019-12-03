const mssql = require('mssql');

let db;

let connectionPromise = mssql.connect({ //create conected to the data base
    //connectionLimit: 100,
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
  console.log("dbModdule");

  let d = db.query("select * from AtblHovala");
  //  where KolAvLakoch=" + id
  let orders = await d;
  console.log(orders);

  return orders;
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
  let c = db.query('insert into tblUsers values (' + newUser.UserName + ',' + newUser.PassName + ',' + newUser.HetPey + ',' + newUser.Selolar + ',' + newUser.EMail + ',' + newUser.KodLakoach + ')');
  let isRegistered = await c;
  return isRegistered;
}
