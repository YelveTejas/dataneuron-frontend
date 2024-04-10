import React, { useState } from 'react'
import {Box,Input,FormControl,Button} from '@chakra-ui/react'
import axios from 'axios'
import { baseurl } from '../utilis/server'
const Create = ({setFlag}) => {
    const [loading,setLoading] = useState(false)
    const [content,setContent] = useState('')
  const handleSubmit = (e)=>{
  e.preventDefault()
  setLoading(false)
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
      <form onSubmit={handleSubmit}>
       <input  value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Post content'></input>
       <button type='submit' style={{marginLeft:'5px'}}>
        {loading ? "...loading" :"submit"}
       </button>
        </form>    
    </>
  )
}

export default Create