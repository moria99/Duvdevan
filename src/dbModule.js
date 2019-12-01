const mysql = require('promise-mysql');

let db;

let connectionPromise = mysql.createPool({ //create conected to the data base
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "nisayon"
  })
  .then((c) => { //it happend after the conection success
    db = c;
  })
  .catch((e) => {
    console.error(e);
  });

module.exports = {
  connectionPromise,
  getOptionOfCasting,
  getOptionOfisConcrete,
  getAllPrices,
  getTotal
};

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
  let d = db.query("select * from tblHMehirShura");
  let data = await d;
  return data;
}

async function getTotal(req, res) {
  let d = db.query('SELECT MisHeshbonit,sachLifney,Hanacha,sachAcharey,Maham,SachHakolKolel FROM tblHMehirShura WHERE  MisHeshbonit = 111');
  let data = await d;
  return data;
  
}
