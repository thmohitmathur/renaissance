import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/events", (req, res ) => {
    res.render("events.ejs");
})

app.listen(port, ()=>{
    console.log(`Port is listening on ${port}`);
})