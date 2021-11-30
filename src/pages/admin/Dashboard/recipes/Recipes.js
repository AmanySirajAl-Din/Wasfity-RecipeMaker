import React from 'react'
import './Recipes.css'
import { useEffect, useState } from 'react'
import { db } from '../../../../firebase'
import { Link } from 'react-router-dom'

import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'

export default function Recipes() {
  const [recipes, setRecipes] = useState([])
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, 'recipes'), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  const editRecipe = async (id) => {
    const docRef = doc(db, 'recipes', id)
    const payload = {
      Title: 'عنب',
      DegreeOfDifficulty: 'سهل',
      Evaluation: 5,
      Photo: 'gggggg',
      TimePreper: '7hours',
      Video: 'jkjjjjjjj',
      ReciprPrepare: 'iii',
    }
    await setDoc(docRef, payload)
    console.log(setDoc(docRef, payload).id)
  }

  const deleteRecipe = async (id) => {
    
    if(prompt("You want to delete this")){
    const docRef = doc(db, 'recipes', id)
    await deleteDoc(docRef).then((data)=>{
      alert("Done");
    });
    console.log(deleteDoc(docRef).id)

    }else{
      return;
    }
  }

  const url = '#'
  return (
    <div className='Recipe-container'>
      <nav className='navbar '>
        <div className='container-fluid'>
          <a className='navbar-brand heading-word ' href={url}>
            Recipes
          </a>
          <div className='d-flex'>
            <Link to='addRecipe'>
              <button className='btn btn-outline-warning'>Add</button>
            </Link>
          </div>
        </div>
      </nav>

      <hr />

      <table className='table  text-black table-hover'>
        <thead>
          <tr>
            <th scope='col'>Number</th>
            <th scope='col'>Recipe Name </th>
            <th scope='col'>Way Preperation</th>
            <th scope='col'>Ingredents</th>
            <th scope='col'> Degree</th>
            <th scope='col'>Period </th>
            <th scope='col'>Evaluation</th>
            <th scope='col'>Image</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => {
            return (
              <tr>
                <th key={recipe.id} scope='row'>
                  {recipe.index}
                </th>
                <td>{recipe.recipeName}</td>
                <td>{recipe.categoryRecipeId}</td>
                <td>
                  <ul>
                    {recipe.recipePreperList &&
                      recipe.recipePreperList.map((recipePreperstep) => {
                        return <li>{recipePreperstep.recipePreper}</li>
                      })}
                  </ul>
                </td>
                <td>{recipe.DegreeOfDifficulty}</td>

                <td>
                  <img
                    src={recipe.imagePath}
                    alt='...'
                    width='100'
                    height='100'
                  />
                </td>

                <td>
                  <button onClick={() => editRecipe(recipe.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteRecipe(recipe.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
