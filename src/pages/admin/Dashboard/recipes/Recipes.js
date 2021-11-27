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
    const docRef = doc(db, 'recipes', id)
    await deleteDoc(docRef)
    console.log(deleteDoc(docRef).id)
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
            <th scope='col'>التسلسل</th>
            <th scope='col'>اسم الوصفة</th>
            <th scope='col'>طريقة التحضير</th>
            <th scope='col'>المكونات</th>
            <th scope='col'>درجة الصعوبة</th>
            <th scope='col'>وقت الطهي</th>
            <th scope='col'>التقييم</th>
            <th scope='col'>الصورة</th>
            <th scope='col'>الفيديو</th>
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
                    {recipe.recipePreperList.map((recipePreperstep) => {
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