import React, {useContext, useEffect, useState} from 'react'
import QuestionCard from '../Components/QuestionCard'
import axios from 'axios';
import { Context } from '../GlobalState/Store'

const Home = () => {


    let [state , dispatch] = useContext(Context)

    let [data,setData] = useState([]);

    useEffect( async ()=>{
        
        const {data} = await axios.get('http://localhost:5000/')
        await setData(data);

    },[0])

    console.log(state);
    console.log(data);

    return (
        <div>
            {/* Update props later */}
            {
                data.map((question,i)=>{
                    return (
                        <QuestionCard key={i} askedBy={question.askedBy} title={question.title} dated={question.datePosted} question={question.question} id={question._id} />
                    )
                })
            }
            
            
        </div>
    )
}

export default Home
