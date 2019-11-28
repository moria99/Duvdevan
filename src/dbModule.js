const mysql = require('promise-mysql');

let db;

let connectionPromise = mysql.createPool({ //create connected to the data base
    connectionLimit: 100,
    host: "localhost",
    user: "",
    password: "",
    database: ""
  })
  .then((c) => { //it happened after the conection success
    db = c;
  })
  .catch((e) => {
    console.error(e);
  });

module.exports = {
  connectionPromise,
  getOptionOfCasting,
  getOptionOfisConcrete,
  insertNewUser,
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
async function insertNewUser(newUser) {
  let c = db.query('insert into tblUsers values (' + newUser.UserName + ',' + newUser.PassName + ',' + newUser.HetPey + ',' + newUser.Selolar + ',' + newUser.EMail + ',' + newUser.KodLakoach+')');
  let isRegistered = await c;
  return isRegistered;
}
