const mssql = require('mssql');

let db;

let connectionPromise = mssql.connect({ //create conected to the data base
    //connectionLimit: 100,
    // host: "localhost",
    user: "duvdevan",
    // server: "DESKTOP-2G2D206\\SQLEXPRESS",
    server: "localhost",
    password: "duvdevan1!",
    // "beitar",
    database: "DuvdevanDB"
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
  getTotal,
  getUsers,
  getUsersAndTheirPasswords,
};

async function getCastingType() {
  let sugYetzika = await db.query("SELECT TOP (100) PERCENT SugYetzika FROM  dbo.AtblHovala WHERE (SugYetzika IS NOT NULL) ORDER BY SugYetzika");
  //let sugYetzika = await db.query("SELECT TOP (100) PERCENT KodParit,TeurParit FROM  dbo.AtblSugYetzika WHERE (TeurParit IS NOT NULL) ORDER BY TeurParit");
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
  return newForm;
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
  let c = db.query("insert into dbo.tblUsers values ('" + newUser.userName + "', '" + newUser.password + "' , '" + newUser.companyNumber + "' , '" + newUser.phone + "' , '" + newUser.email + '" , "' + newUser.clientCode + '" , "' + newUser.clientCode + "')");
  let isRegistered = await c;
  console.log(isRegistered);
  return isRegistered;
}

async function getUsers() {
  let c = db.query("select dbo.tblUsers.UserName from dbo.tblUsers");
  let userNameListFromDbReturned = await c;
  //console.log(userNameListFromDbReturned);
  return userNameListFromDbReturned;
}

async function getUsersAndTheirPasswords() {
  let c = db.query("select dbo.tblUsers.UserName , dbo.tblUsers.PassName from dbo.tblUsers");
  let userNameAndPassnameListFromDbReturned = await c;
  console.log(userNameAndPassnameListFromDbReturned);
  return userNameAndPassnameListFromDbReturned;
}
