import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import './Coketail.css'

const Coketail = () => {
  const [query,setQuery] =useState(" ")
  const [search,setsearch]=useState()
  const [cocktail,setCocktail]=useState([])


  useEffect(()=> {
if(query!=" "){
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  .then((response)=> response.json())
  .then((Data)=>{
    setCocktail(Data.drinks)
  })
  .catch((error) => console.error('Error fetching data:', error));
}else{
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
  .then((response)=> response.json())
  .then((Data)=>{
    setCocktail(Data.drinks)
  })
  .catch((error) => console.error('Error fetching data:', error));
}

  },[query])

  const clickhere=(e)=>{
    e.preventDefault();
    setQuery(search)

  }
  return (
    <>
     <div className="cockimg">
<div className="text">Enjoy Your Cocktail</div>
      </div>
      <div className="forform">
<form onSubmit={clickhere}>
  <input type="text" placeholder='Enter Your Cocktails' value={search} className='cocktailsearch' onChange={(e)=>setsearch(e.target.value)} />
</form>

<div className="showcocktail">
<div className="contnier">
  {cocktail.map((item)=>
  (
<div className="item1">
  <NavLink to={`/${item.idDrink}`}><img src={item.strDrinkThumb} alt="" /></NavLink>
  <div className="name">{item.strDrink}</div>
  <div className="tags">{item.strTags}</div>
  <div className="IBA">{item.dateModified}</div>
</div>

  )
  )}
  
</div>
</div>
      </div>
    </>
   

  )
}

export default Coketail
