const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/duetDB', {useCreateIndex: true , useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const newUserSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    userPassword: {
        type: String,
        required: true,
    }
})

const newUser = mongoose.model('NewUser',newUserSchema);

const newProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required: true,
        unique:true
    },
    fatherName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cnic:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    enrolement:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }
})

const newProfile = mongoose.model("newProfile", newProfileSchema)

const questionSchema = new Schema({
    askedBy: {
        type: String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    queryType: {
        type: String,
        required: true
    },
    question:{
        type: String,
        required:true
    }
})

const Question = mongoose.model('Question' , questionSchema)

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB connection established');
});


app.post('/signup' , (req,res)=> {


   const userEmail = req.body.email;
   const userPassword = req.body.password;


   const User = newUser({
       userEmail,
       userPassword
   })

   User.save().then(()=>{res.json('User added')})
   .catch((err)=> res.status(400).json('Error:'+err))


})

app.post('/buildprofile' , (req,res) => {
    const profile = new newProfile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        gender: req.body.gender,
        cnic: req.body.cnic,
        bloodGroup: req.body.bloodGroup,
        rollNo: req.body.rollNo,
        designation: req.body.designation,
        department: req.body.department,
        batch: req.body.batch,
        enrolement: req.body.enrolement,
        contact: req.body.contact
    })

    profile.save().then(()=>{res.json('Profile added')})
    .catch((err)=>res.status(400).json('Error:'+err))
})

app.post('/askaquestion',(req,res)=>{
    const newQuestion = new Question({
        askedBy: req.body.askedBy,
        title: req.body.title,
        queryType: req.body.queryType,
        question: req.body.question
    })

    newQuestion.save().then(()=>{res.json('Question added')}).catch((err)=>res.status(400).json('Error:'+err))
})

app.listen(5000 , () => {
    console.log('Server running on port 5000');
});