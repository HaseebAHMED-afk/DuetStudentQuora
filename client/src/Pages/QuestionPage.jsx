import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const QuestionPage = () => {

    let [questionData , setQuestionData] = useState(null)
    let [userData , setUserData] = useState(null)

    let {id} = useParams();

   
    
    useEffect(()=>{
        const fetchQuestionData =  async () => {
            const {data}= await axios.get(`http://localhost:5000/${id}`)
            await setQuestionData(data)
        }

        fetchQuestionData();
    },[])

    console.log(questionData);

    // useEffect(()=>{
    //     const fetchUserData = async (questionData) =>{
    //         const {data} = await axios.get(`http://localhost:5000/profile/${questionData.askedBy}`)
    //         await setUserData(data)
    //     }


    //     fetchUserData(questionData);
    // })

    // console.log(userData);
    
    return (
        <div>
            {
                questionData && (
                    <div className="question">
                        <h1>{questionData.title}</h1>
                        <p>Asked {questionData.datePosted}</p>
                        <p>Asked By {questionData.askedBy}</p>
                        <p>Status: {questionData.isOpen ? 'Open' : 'Closed'}</p>
                        <p>Category: {questionData.queryType}</p>
                        <p>{questionData.question}</p>
                    </div>
                    
                )
            }
        </div>
    )
}

export default QuestionPage
