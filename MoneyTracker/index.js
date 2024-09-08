var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://abi20061507:abisha2006@cluster0.pmdfyvw.mongodb.net/moneyTracker?retryWrites=true&w=majority&appName=Cluster0', { 
    
});

var db = mongoose.connection;
db.on('error', () => console.log("Error in connecting to the Database"));
db.once('open', () => console.log("Connected to Database"));

const transactionSchema = new mongoose.Schema({
    category: String,
    amount: Number,
    Source: String,
    date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema, 'moneytracker');

app.post("/addTransaction", async(req, res) => {
    var category = req.body.category;
    var amount = req.body.amount;
    var Source = req.body.Source;
    var date = req.body.date;

    const newTransaction = new Transaction({
        category: category,
        amount: amount,
        Source: Source,
        date: date
    });

    newTransaction.save()
        .then(() => {
            console.log("Record Inserted Successfully");
            res.send("Record Inserted Successfully");
        })
        .catch((err) => {
            console.error("Error inserting record: ", err);
            res.status(500).send("Error inserting record");
        });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
