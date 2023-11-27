import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Statistics = () => {
    const navigate = useNavigate()

    const [ recipes, setRecipes ] = useState([])
    const [ imageError, setImageError] = useState(false)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://manducares.com/api/v1/recepies',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then((response) => {
            console.log(response.data.data.doc)
            setRecipes(response.data.data.doc || [])
        })

        console.log(recipes)

    }, [])


    const imgElement = document.querySelector('img');

    const authToken = localStorage.getItem('token')

    const headers = new Headers({
        'Authorization': `Bearer ${authToken}`
    })

    fetch('https://manducares.com/recepie-64976c4ad561d223c5ac6ddb-1689024695194.jpg', {
  method: 'GET',
  headers: headers,
})
.then(response => {
  console.log("response")
  console.log(response)})



    return(
        <div className="bg-white border-4">
      <div className="mx-auto max-w-2xl px-24 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group relative" onClick={() => handleClick(recipe)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={`https://manducares.com/${recipe.imageCover}`}   alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />              
              </div>
              <div className="mt-4 bg-teal-600 bg-opacity-30 shadow-lg rounded-lg flex justify-center items-center">
                <h4>{recipe.name}</h4>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
    )
}


export default Statistics