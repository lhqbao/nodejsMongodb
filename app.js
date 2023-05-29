var express = require("express");
var app = express();
var mongoose = require("mongoose");
var myData = require("./template");

var dbURI = "mongodb+srv://user:qgEEzmVngOpd03KF@atlascluster.txmdxep.mongodb.net/MongoTrial?retryWrites=true&w=majority";

app.use(express.json());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(r => app.listen(process.env.PORT, '0.0.0.0'))// app.listen(process.env.port))
    .catch(e => console.log(e));

console.log(process.env.port);
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
})

app.post("/api", (req, res) => {
    async function sendData() {
        var userInfo = await myData.create({
            name: req.body.name,
            email: req.body.email,
            city: req.body.city
        })
    }
    sendData();
    res.json({
        message: "It's perfect, I received all the data"
    });
})

app.get("/api", (req, res) => {
    try {
        async function search() {
            var dataFound = await myData.find();
            res.json({
                dataFound
            });
        }
        search();
    } catch (e) {
        console.log(e)
    }

})
