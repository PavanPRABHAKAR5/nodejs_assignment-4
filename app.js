const express=require("express");
const app=express();

var  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.set("views","./views")
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("Hello world !");
})

app.get("/calculator",(req,res)=>{
    res.render("calculator.ejs");
})


const response = {

    invalidInputs : {
        status: "error",
        message : "Invalid data types"
    }, 
    underflow : {
        status : "error",
        message: "Underflow"
    },
    overflow :{
        status : "error",
        message: "Overflow"
    }

}

app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;


    let result = Number(num1) + Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    
    }

    if(isNaN(num1)  || isNaN(num2) ){ 
        return res.status(400).json (response.invalidInputs);
     }

    res.status(200).json({
        status : "Sucess",
        message: "the sum of given two numbers",
        sum : result
    })

})

app.post("/sub", (req, res) => {
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let result = Number(num1) - Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    }

    if(isNaN(num1)  || isNaN(num2) ){ 
        return res.status(400).json (response.invalidInputs);
     }

    res.status(200).json({
        status : "Sucess",
        message: "the difference of given two numbers",
        difference : result
    })
})

app.post("/multiply", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let result = Number(num1) * Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    }

    if(isNaN(num1)  || isNaN(num2) ){ 
        return res.status(400).json (response.invalidInputs);
     }

    res.status(200).json({
        status : "Sucess",
        message: "The product of given numbers",
        result : result
    })
})

app.post("/divide", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;


    if(Number(num2) == 0) {
        return res.status(400).json ({
            status: "error",
            message : "Cannot divide by zero"
        }) 
    }

    let result = Number(num1)/Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    
    }
    if(isNaN(num1)  || isNaN(num2) ){ 
        return res.status(400).json (response.invalidInputs);
     }

    res.status(200).json({
        status : "Sucess",
        message: "The division of given numbers",
        result : result
    })
})


app.listen(5000,()=>{
    console.log("Server is running at 5000");
})