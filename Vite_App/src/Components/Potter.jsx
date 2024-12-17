import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Potter.css'

const Potter = () => {
  const [lang ,setLang]=useState("")
  const [find,setFind]=useState("")
  const [book,setBook]=useState([])
  const [query1,setQuery1]=useState()
  const [query2,setQuery2]=useState()

  useEffect(()=>{

 if (query1 && query2) {fetch(`https://potterapi-fedeperin.vercel.app/${query2}/${query1}`)

 .then((response)=>response.json())
 .then((Data)=>{
   setBook(Data)
 
 
})
.catch((error) => console.error('Error fetching data:', error));
 }

 
},[query1,query2])
  
const clickfor = (e) => {
  e.preventDefault();
  if (lang && find) {
    setQuery1(find.toLowerCase());
    setQuery2(lang.substring(0, 2).toLowerCase());
  } 
};
  return (
    <div className='pottermain'>
      <div className="potterform" >
         
        <form>
          <input type="text" list="language" placeholder='Enter Yout Language' value={lang} onChange={(e)=>setLang(e.target.value)}/>
          <datalist id="language">
            <option value="English"/>
            <option value="Español"/>
            <option value="Français"/>
            <option value="Italiano"/>
            <option value="Português"></option>
          </datalist>
        </form>

        <form action="" >
          <input type="text" list="find" placeholder='Enter EndPoints' value={find} onChange={(e)=>setFind(e.target.value)}/>
          <datalist id="find">
            <option value="Books"/>
            <option value="characters"/>
            <option value="houses"/>
            <option value="spells"></option>
          </datalist>
        </form>
       
      </div>
      <button onClick={clickfor}>Search</button>
      <div className="contanir">
      {query1 === "books" ? (
    book.map((e) => (
      <div key={e.id || e.title}>
       <NavLink to={`${e.number}`}><img src={e.cover} alt={e.title || "Book Cover"} /></NavLink> 
        <div className="title">{e.title}</div>
        <div className="originalTitle">{e.originalTitle}</div>
        <div className="releaseDate">{e.releaseDate}</div>
      </div>
    ))
  ) : query1 === "characters" ? (
    book.map((e) => (
      <div key={e.id || e.name}> 
        <img src={e.image} alt={e.name || "Character Image"} />
        <div className="fullName">{e.fullName}</div>
        <div className="interpretedBy">{e.interpretedBy}</div>

      </div>
    ))
  ) : query1 === "houses" ? (
    book.map((e) => (
      <div key={e.id || e.name}> 
      <div className="house">{e.house}</div>
      <div className="emoji">{e.emoji}</div>
      <div className="founder">{e.founder}</div>
      </div>
    ))
  ) : (
    book.map((e) => (
      <div key={e.id || e.name}>
        <div className="spell">{e.spell}</div>
        <div className="use">{e.use}</div>
      </div>
    ))
  )}
      </div>
    </div>
    
  )
}

export default Potter
