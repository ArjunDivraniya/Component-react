import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Cocktailinfo.css"

const Cocktailinfo = () => {
const {idDrink}=useParams()
const [drinks,setDrinks]=useState()

useEffect(()=>{
    fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    .then((response)=>response.json())
    .then((Data)=>{
      setDrinks(Data.drinks[0])
    })
})

  return (
   <>
   <div className="contaner">
<div className="drinks">
    <div className="first">
        <img src={drinks.strDrinkThumb} alt="" />
        <div className="text">
            <div className="text2">{drinks.strDrink}</div>
            <div className="text2">{drinks.strTags}</div>
            <div className="text3">{drinks.strIBA}</div>
            <div className="text4">{drinks.strAlcoholic}</div>
        </div>
    </div>
    <div className="inrto">
        <div className="para">{drinks.strInstructions}</div>
    </div>
    <div className="information">
        <div className="indrediant">
            <div className="ingrititle">Ingredient</div>
            <div className="ingri">{drinks.strIngredient1}</div>
            <div className="ingri">{drinks.strIngredient2}</div>
            <div className="ingri">{drinks.strIngredient3}</div>
            <div className="ingri">{drinks.strIngredient4}</div>
        </div>
        <div className="Measure">
            <div className="meastitle">Measure</div>
            <div className="meas">{drinks.strMeasure1}</div>
            <div className="meas">{drinks.strMeasure2}</div>
            <div className="meas">{drinks.strMeasure3}</div>
            <div className="meas">{drinks.strMeasure4}</div>
        </div>
    </div>
</div>

   </div>
   </>
  )
}

export default Cocktailinfo
