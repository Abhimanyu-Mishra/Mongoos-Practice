const mongoos = require("mongoose")

const url = "mongodb://127.0.0.1:27017/mongoosdb"

const connectionn= async()=>{
    await mongoos.connect(url);
    
}
module.exports =connectionn