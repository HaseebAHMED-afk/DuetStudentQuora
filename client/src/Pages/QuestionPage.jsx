import { Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import {Context} from '../GlobalState/Store'
import '../App.css';

const QuestionPage = () => {

    const [state,dispatch] = useContext(Context);

    const navigate = useNavigate();


    let [questionData , setQuestionData] = useState(null)
    let [userData , setUserData] = useState(null)
    let [answer , setAnswer] = useState('')

    let {id} = useParams();

   
    
    useEffect(()=>{
        const fetchQuestionData =  async () => {
            const {data}= await axios.get(`http://localhost:5000/${id}`)
            await setQuestionData(data)
        }

        fetchQuestionData();
    },[0])

    console.log(questionData);

    // useEffect(()=>{
    //     const fetchUserData = async (questionData) =>{
    //         const {data} = await axios.get(`http://localhost:5000/profile/${questionData.askedBy}`)
    //         await setUserData(data)
    //     }


    //     fetchUserData(questionData);
    // })

    // console.log(userData);


    const handleSubmit= async ()=>{
        await axios.patch(`http://localhost:5000/${id}`, {answer}).then((response)=>console.log(response)).catch((err)=>console.log(err));
        await navigate('/');
    }
    
    return (
      <div>
        {questionData && (
          <div className="question">
            <Typography style={{ margin: 25 }} variant="h3">
              {questionData.title}
            </Typography>
            <Typography style={{ margin: 25 }} variant="p">
              Dated: {questionData.datePosted}
            </Typography>
            <br />
            <Typography style={{ margin: 25 }} variant="p">
              Asked By: {questionData.askedBy}
            </Typography>
            <br />
            <Typography style={{ margin: 25 }} variant="p">
              Status: {questionData.isOpen ? "Open" : "Closed"}
            </Typography>
            <Typography style={{ margin: 25 }} variant="h6">
              Category: {questionData.queryType}
            </Typography>
            <Typography style={{ margin: 25 }} variant="h5">
              {questionData.question}
            </Typography>
          </div>
        )}
        {questionData && questionData.answers && questionData.answers.map((answer) =>(
          <div className="answer-border">
            <p style={{ margin: 25 }} >
            {answer}
          </p>
          </div>
            
        )) }
        <div>
          <Typography style={{ margin: 50, marginBottom: 5 }} variant="h6">
            Your Answer
          </Typography>
          <TextField
            className="your-answer"
            variant="outlined"
            color="primary"
            label="Question"
            value={answer}
            required={true}
            multiline
            onChange={(e) => setAnswer(e.target.value)}
            rows={15}
          />
          <br />{" "}
          <Button variant="contained" color="primary" className="submit-answer" onClick={handleSubmit} >
            Submit
          </Button>
        </div>
      </div>
    );
}

export default QuestionPage
