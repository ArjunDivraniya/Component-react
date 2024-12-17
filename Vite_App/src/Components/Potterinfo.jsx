import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Potterinfo = () => {
    const {number,query1,query2}=useParams()
const [harry,setHarry]=useState()

useEffect(()=>{
    fetch(`https://potterapi-fedeperin.vercel.app/${query2}/${query1}`)

    .then((response)=>response.json())
    .then((Data)=>{
      setHarry(Data[number-1])
    
    
   })
   .catch((error) => console.error('Error fetching data:', error));
    
   
},[number, query1, query2])
  return (
    <>
    <div className="div">
        <div className="book">
<img src={harry.cover} alt="" />
<div className="title">{harry.title}</div>
<div className="title2">{harry.originalTitle}</div>
<div className="page">{harry.pages}</div>
<div className="date">{harry.releaseDate}</div>
        </div>
<div className="des">{harry.description}</div>
    </div>
    </>
  )
}

export default Potterinfo
