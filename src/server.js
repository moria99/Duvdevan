//require('dotenv').config(); //anable decleare veriable in env from hide this veriable in gitHub
const express = require('express'); //run express direectory (at js) and put an output in it.
const dbModule = require("./dbModule.js");
const app = express();
const port = 3000;

//use is happand before every requst
app.use(express.json()); //parse the body to comfortable used
app.use(express.urlencoded()); //parse the url to comfortable used
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log("I listen to port " + port);
});

app.post('/getOrders', async function (req, res) {
  console.log("server")
  let orders;
  orders = await dbModule.getOrderFromDb(req.body.id);
  res.send(orders);
})


app.post("/createUser", async function (req, res) {
  let userIsCreated = await dbModule.insertNewUser(req.body);
  res.send(userIsCreated);
})

app.get("/getUsersToCheckAgainstUserNamesInDb", async function (req, res) {
  let userNamesReceived = await dbModule.getUsers();
  res.send(userNamesReceived);
})

app.get("/getUsersAndPassNamesToValidateExistingUserLogin", async function (req, res) {
  let userNamesAndPassNamesReceived = await dbModule.getUsersAndTheirPasswords();
  res.send(userNamesAndPassNamesReceived);
})

app.get('/priceDetails', async function (req, res) {
  let prices = [];
  prices = await dbModule.getAllPrices();
  res.send(prices);
});


app.get('/totalPrice', async function (req, res) {
  let total;
  total = await dbModule.getTotal();
  res.send(total);
});

app.get('/getCastingType', async function (req, res) {
  console.log("server getCastingType work");
  let sugYetzika=await dbModule.getCastingType();
  res.send(sugYetzika);
});

app.get('/getConcreteType', async function (req, res) {
  console.log("server getConcreteType work");
  let pritimBeton= await dbModule.getConcreteType();
  res.send(pritimBeton);
});

app.get('/getPumpType', async function (req, res) {
  console.log("server getPumpType work");
  let pritimMasheva= await dbModule.getPumpType();
  res.send(pritimMasheva);
});

app.post('/pushDetailsForm', async function (req, res) {
  console.log(req.body);
  let result = await dbModule.pushDetailsForm(req.body);
  console.log(result);
  res.send(result);
});
