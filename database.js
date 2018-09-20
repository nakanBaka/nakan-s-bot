var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://nakan:ynakan234@ds257981.mlab.com:57981/neko", {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Conectado ao Mongoose!");
})

var User = new Schema({
    _id: {
        type: String
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    rep: {
        type: Number,
        default: 0
    }
    }
})
  var Guild = new Schema({
    _id: {
        type: String
    },
    prefix: {
        type: String,
        default: "c!"

var Users = mongoose.model("Users", User);
var Guilds = mongoose.model("Guilds", Guild);        
exports.Users = Users
exports.Guilds = Guilds        
