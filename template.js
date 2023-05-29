var mongoose = require("mongoose");
var Template = mongoose.Schema;

var dataTemplate = new Template({
    name: String,
    email: String,
    city: String,
});
var finalTemplate = mongoose.model("user", dataTemplate);
module.exports = finalTemplate;