import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import './meal.css'
import Mealinfo from './Mealinfo'

const Meel = () => {
  const [meal ,setMeal]=useState([])
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('')
  
  

  useEffect(()=>{

   if(query){
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response)=>response.json())
    .then((Data)=>{
      setMeal(Data.meals)
  })
  .catch((error) => console.error('Error fetching data:', error));
}
  },[query])


  const searchclick =(e)=> {
    e.preventDefault();
setQuery(search)
  }
  return (
   <>
   <div className="navimage"><p className='text'>Meal Zone</p>
    <p className='subtext'>Discover Best Meal In Meal Zone</p>
    </div>
    <div className='mainmeal'>
      
       <div className='meal' >
     <form onSubmit={searchclick} className='mealform'>
      <input type="text" value={search} placeholder='Search Your Meal' className='mealsearch' onChange={(e)=>setSearch(e.target.value)} />
     
     </form>
     <div className="display">{
          meal.map((item) => (

        <div key={item.idMeal} className="meal-item">
              <NavLink to={`/${item.idMeal}`}><img src={item.strMealThumb} alt={item.strMeal} /></NavLink>
              <h3>{item.strMeal}</h3>
              <p>Category: {item.strCategory}</p>
            </div>
          ))}</div>
    </div>

    </div>
   </>
  )
}

export default Meel
