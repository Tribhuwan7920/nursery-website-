const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/nursery_website")
.then(() => {
    console.log("connected successfully")
})
.catch((err) => {
    console.log("something went wrong !! try again")
})


const schema = new mongoose.Schema({
    "name" : {
        type : String ,
        // require : true,
        // unique : true
    },
    "email": String,
    "concern" : String 
})

const contact_schema = {
    "name" : String ,
    "email" : String
}

const database = new mongoose.model("form_data" , schema)
const contact_model = new mongoose.model("contact_data" , contact_schema)

module.exports = {database , contact_model}