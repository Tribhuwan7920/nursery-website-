const express = require("express")
const hbs = require("hbs")
const path = require("path")
const {database , contact_model} = require("./database")

const app = express()


// middleware 
const port = process.env.PORT  || 3000 ;
app.use(express.static(path.join(__dirname , "./public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "hbs")
app.set("views" , "./templates")
hbs.registerPartials(path.join(__dirname , "./templates/partials/"))

app.get("" , (req, res) => {

    // console.log("this is the home page ")
    // res.send("this is from the tribhuwan sharma")
    res.render("home")
})
app.get("/about" , (req, res) => {

    // console.log("this is the home page ")
    // res.send("this is from the tribhuwan sharma")
    res.render("about")
})

app.post("" , async (req, res) =>{
    let data = await database.insertMany(req.body)
    res.redirect("/")
})
app.get("/contact" , (req,res)=>{
    res.render("contact")
})

app.post("/contact" ,async  (req,res) =>{
    try{

        let data = await contact_model.insertMany(req.body)
        res.redirect("/contact")
    }
    catch(except){
        res.send("data is going to wrong ")
    }
})

app.listen(port , ()=>{
    console.log(`http://localhost:${port}`)
})