const express = require("express")

const app = express()
const port = 3000

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.set('views', 'views')


app.get("/", (req,res) => {
    res.render("index")
})
app.get("/about",(req,res) => {
    res.render("about")
})
app.get("/experience", (req,res) => {
    res.render("experience")
})
app.get("/contact", (req,res) => {
    res.render("contact")
})
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})