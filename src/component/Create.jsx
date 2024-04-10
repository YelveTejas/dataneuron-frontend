import React, { useState } from 'react'
import {Box,Input,FormControl,Button} from '@chakra-ui/react'
import axios from 'axios'
import { baseurl } from '../utilis/server'
const Create = ({setFlag}) => {
    const [loading,setLoading] = useState(false)
    const [content,setContent] = useState('')
  const handleSubmit = (e)=>{
  e.preventDefault()
  if(!content){
    alert('please write something')
  }
  setLoading(true)
  axios.post(`${baseurl}/user/post`,{content})
  .then((res)=>{
    alert(res.data.message)
    setLoading(false)
    setFlag((pre)=>!pre)
    setContent('')
  }).catch((error)=>{
    setLoading(false)
    console.log(error)
  })
  }
  return (
    <>
      <div>
        <h4 style={{marginBottom:"10px"}}>Add Content</h4>
      <form onSubmit={handleSubmit}>
       
       <input  style={{border:'none',borderBottom:"1px solid black",size:"40"}} value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Post content'></input>
       <button type='submit' style={{marginLeft:'5px',border:"none",cursor:'pointer'}}>
        {loading ? "...loading" :"submit"}
       </button>
        </form>    
      </div>
     
    </>
  )
}

export default Create