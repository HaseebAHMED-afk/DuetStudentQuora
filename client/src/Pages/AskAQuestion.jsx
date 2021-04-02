import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../App.css'
import { Button, TextField, InputLabel, FormControl } from '@material-ui/core';
import axios from 'axios'

const AskAQuestion = () => {


    const [title , setTitle] = useState('')
    const [question, setQuestion] = useState('')
    const [query , setQuery] = useState('')
    const [approved , setApproved] = useState(false)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleOnSubmit = () => {
        questionOnSubmit()
    }

    const questionOnSubmit = () => {
        var newQuestion = {
            title,
            question,
           queryType:query,
           askedBy:'slkfnlksfnlk'
        }
        
        axios.post('http://localhost:5000/askaquestion',newQuestion).then((response)=>console.log(response)).catch((err)=>console.log(err))
    }

    const profanityCheck = () => {
        
        setApproved(true)
    }
    
    const handleOnCheck = () =>{
        profanityCheck()
    }

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    
    return (
      <div className="questionPage">
       <h1 className='question-main-heading' >What's your query?</h1>
       <div className="guidelines">
       <p className='guideline-para' >Before you begin, please read the following rules and regulations.</p>
       <ul className='guideline-list' >
           <li className='guideline-list-item' >
               Only English language is allowed and encouraged.
           </li>
           <li className='guideline-list-item' >
               Give a vivid description of your query.
           </li>
           <li className='guideline-list-item' >
               Please make sure that your question falls in the chosen category.
           </li>
           <li className='guideline-list-item' >
               Refrain from using this portal as a complaint box.
           </li>
           <li className='guideline-list-item highlighted' >
               Do not use Profanity , Religious and Racial Slurs.
           </li>
           
       </ul>
       <p className='note' >
           Note that violating any of the above mentioned rules may result in suspension from portal and continuous violation may lead to termination of your account.  
       </p>
       </div>

        <div className="question-form">
            <TextField onChange={handleTitleChange} value={title} variant='outlined' color='primary' label='Title' required className='question-input' />
            <FormControl variant="outlined" className="profile-input-noline"  >
          <InputLabel id="demo-simple-select-outlined-label">
           Type Of Query
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Type Of Query"
            fullWidth={true}
            style={{margin: 0}}
            value={query}
            onChange={handleQuery}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Academics"}>Academics</MenuItem>
            <MenuItem value={"Fees & Finance"}>Fees & Finance</MenuItem>
            <MenuItem value={"Transportation"}>Transportation</MenuItem>
            <MenuItem value={"Curricular and Co-Curricular Activities"}>Curricular and Co-Curricular Activities</MenuItem>
            <MenuItem value={"General"}>General</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
            <TextField onChange={handleQuestionChange} value={question} variant='outlined' color='primary' label='Question' required={true} className='question-input' multiline rows={15} />
            <Button onClick={handleOnSubmit} className='question-submit-btn' disabled={approved === true ? false : true} required={true} variant='contained' color='primary' >Submit</Button>
            <Button onClick={handleOnCheck} className='profanity-check' variant='outlined' color='secondary' >Check</Button>
        </div>

       
      </div>
    );
}

export default AskAQuestion
