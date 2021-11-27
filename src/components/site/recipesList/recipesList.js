import './recipesList.css'
import Recipe from '../recipe/recipe'
import { data } from '../../../data/data'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  // --------------- Firebase
  const colRef = collection(db, 'recipes')

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setRecipes([...recipes, { ...doc.data(), id: doc.id }])
          console.log(...doc.data())
        })
        console.log(recipes, 'onside')
      })
      .catch((e) => console.log(e.message))
  }, [])
  console.log(recipes)

  return (
    <section className='recipe-list'>
      {recipes.map((recipe) => {
        return <Recipe {...recipe} key={recipe.id} />
      })}
    </section>
  )
}

export default RecipeList
