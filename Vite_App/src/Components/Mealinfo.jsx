import React, { useEffect, useState} from 'react'
import { useParams ,NavLink} from 'react-router-dom'
import './Mealinfo.css'

const Mealinfo = () => {
    const {idMeal}=useParams()
    const [info,setInfo]=useState('')
    

useEffect(()=>{

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
.then((response)=>response.json())
.then((Data)=>{
  setInfo(Data.meals[0])
  
  
})
.catch((error) => console.error('Error fetching data:', error));


},[info])
  
  return (
    <div className='mealinfo'>
        <NavLink to="/meal"><button>Close</button></NavLink>
 <div className="info">
    <div>Meal Detail</div>
    <div className="first">
    <img src={info.strMealThumb} alt="" />
    <div className="chotu">
        <p>{info.strMeal}</p>
        <p>{info.strCategory}</p>
        <p>{info.strMeal}</p>
        <p>{info.strTags}</p>
    </div>
    <div className="Instrutions">
        <p>{info.strInstructions}</p>
        
    </div>
    <div className="itemsofmeal">
    <div className="Ingredient">
       <p className='text1'>Ingredient</p>
            <ul>
                <li>{info.strIngredient1}</li>
                <li>{info.strIngredient2}</li>
                <li>{info.strIngredient3}</li>
                <li>{info.strIngredient4}</li>
                <li>{info.strIngredient5}</li>
                <li>{info.strIngredient6}</li>
                <li>{info.strIngredient7}</li>
            </ul>
        </div>
        <div className="measure">
            <p className='text2'>measure</p>
            <ul>
                <li>{info.strMeasure1}</li>
                <li>{info.strMeasure2}</li>
                <li>{info.strMeasure3}</li>
                <li>{info.strMeasure4}</li>
                <li>{info.strMeasure5}</li>
                <li>{info.strMeasure6}</li>
                <li>{info.strMeasure7}</li> 
            </ul>
        </div>
    </div>
  
    </div>

    <button onClick={info.strSource}>Recipe Video</button>
 </div>

    </div>
  )
}

export default Mealinfo
