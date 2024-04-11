import React, { useState } from 'react'
import axios from 'axios'
import { baseurl } from '../utilis/server'
const Create = ({setFlag}) => {
    const [loading,setLoading] = useState(false)
    const [content,setContent] = useState('')
  const handleSubmit = (e)=>{
  e.preventDefault()
  if(!content){
  return  alert('please write something')
  }
  setLoading(true)
  axios.post(`${baseurl}/user/post`,{content})
  .then((res)=>{
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
        <h3 style={{marginBottom:"10px"}}>Add Content</h3>
      <form onSubmit={handleSubmit}>
       
       <input  style={{borderBottom:"1px solid black"}} value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Post content'></input>
       <button type='submit' style={{marginLeft:'5px',cursor:'pointer'}}>
        {loading ? "...loading" :"submit"}
       </button>
        </form>    
      </div>
     
    </>
  )
}

export default Create