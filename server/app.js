const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

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

const User = mongoose.model('NewUser',newUserSchema);

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

const Profile = mongoose.model("newProfile", newProfileSchema)

const answerSchema= new Schema({
    answeredBy: String,
    answer: String,
    isAnswer: Boolean
})

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
    },
    datePosted: String,
    isOpen: Boolean,
    answers:[
        {
            type: answerSchema
        }
    ]
})

const Question = mongoose.model('Question' , questionSchema)

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB connection established');
});

// Home Page

app.get("/", (req,res)=>{
    Question.find().
    then(question => res.json(question)).
    catch(err => res.status(400).json('Error: '+err))
})

// Question Page

app.get("/:id", (req,res)=>{
    Question.findById(req.params.id).
    then(question => res.json(question)).
    catch(err => res.status(400).json('Error: '+err))
});




// Sign Up Page


app.post('/signup' , (req,res)=> {


   const userEmail = req.body.email;
   const userPassword = req.body.password;


   const User = new User({
       userEmail,
       userPassword
   })

   User.save().then(()=>{res.json('User added')})
   .catch((err)=> res.status(400).json('Error:'+err))


});

// Login Page

app.post('/login', (req,res)=>{
    const userEmail = req.body.email;
    const password = req.body.password;

   User.find({userEmail}).then((response)=> {
       if(response.length === 0){
        res.json("404")
       }else{
        let tempPassword=response[0].userPassword;
        if(tempPassword!==password){
            res.json('Wrong password')
        }else{
            res.json(response)
        }
            
       }
   })
   .catch((err)=> res.status(404).json('Error:'+err))
});

// Profile Page

app.post('/buildprofile' , (req,res) => {
    const profile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName:req.body.userName,
        userEmail:req.body.userEmail,
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
});

// app.get('/profiles/:id',(req,res)=>{
//     let id =String(req.params.id);

//     console.log(id);
//     newProfile.find({userEmail: id}).then(()=> res.json(response))
//     .catch(err => res.status(404).json('Error: '+err))
// })

app.get('/profile/:id',(req,res)=>{

  Profile.findOne({userEmail:req.params.id}).then((response)=>res.json(response)).
  catch((err)=>res.json(err))

});

//Ask a Question Page

app.post('/askaquestion',(req,res)=>{
    let d = new Date();
    const newQuestion = new Question({
        askedBy: req.body.askedBy,
        title: req.body.title,
        queryType: req.body.queryType,
        question: req.body.question,
        datePosted: String(d) ,
        isOpen: true,
        answers:[]
    })

    newQuestion.save().then(()=>{res.json('Question added')}).catch((err)=>res.status(400).json('Error:'+err))
})

app.listen(5000 , () => {
    console.log('Server running on port 5000');
});