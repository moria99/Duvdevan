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

app.get('/getOrders'), async function (req, res) {
  let orders = [];
  dbModule.connectionPromise
    .then(() => {
      dbModule.getOrdersFromDb(req.body)
        .then((d) => {
          orders = d;
          res.send(orders);
        })

    })

}
app.listen(port, () => {
  console.log("I listen to port " + port);
});


//the functions
app.get('/getOrders', async function (req, res) {
  console.log("server");

  let orders;
  orders = await dbModule.getOrderFromDb(req.body);
  res.send(orders);
})

app.get('/getOptionOfCasting', async function (req, res) {
  let CastingArray;
  CastingArray = await dbModule.getCastingType();
  res.send(CastingArray);
})

app.get('/getOptionOfisConcrete', async function (req, res) {
  let isConcrete = await dbModule.getConcreteType();
  res.send(isConcrete);
})

app.post("/createUser", async function (req, res) {
  let userIsCreated = await dbModule.insertNewUser(req.body);
  res.send(userIsCreated);
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
