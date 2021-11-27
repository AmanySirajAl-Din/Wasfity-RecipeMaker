import './recipesList.css'
import Recipe from '../recipe/recipe'
import { data } from '../../../data/data'
import { collection, getDocs,onSnapshot, } from '@firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'


const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  // --------------- Firebase
  

  


  useEffect(
    () =>
      onSnapshot(collection(db, "recipes"), (snapshot) =>
      setRecipes(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );



  return (
    //  <section className='recipe-list'>
    <>
      {recipes.map((recipe) => {
            return (
             <div>
             {recipe.recipeName}
             </div>
               
            );
          })}
          </>
  
  );
}

export default RecipeList
