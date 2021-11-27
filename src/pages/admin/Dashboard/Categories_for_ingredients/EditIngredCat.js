import React from 'react'
import { db, app } from '../../../../firebase'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import './Categories_for_ingredients.css'
import { useHistory } from 'react-router-dom'
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'

export default function EditaIngredCat() {
  const [ingerdCatName, setIngredCatName] = useState('')
  const history = useHistory()

  const AddIngredCatHandel = (e) => {
    e.preventDefault()

    addDoc(collection(db, 'Categories_for_ingredients'), {
      ingCatName: ingerdCatName,
    })
      .then(() => {
        // setError("");

        alert('Recipe Added successefuly 👍')
        return history.push('Dashboard/IC')
      })
      .catch((error) => {
        alert(error.message)
      })

    // setRecipeCatName("")
  }
  return (
    <div className=' add-category'>
      <form className='form' onSubmit={AddIngredCatHandel}>
        <div className='mt-4 p-5' dir='rtl'>
          <h1 className='text-center text-black'>اضافة قسم</h1>
          <div className='form-group text-right'>
            <label htmlFor='recipeCatId' className='form-label'>
              ID
            </label>
            <input
              type='text'
              className='form-control'
              id='recipeCatId'
              placeholder='ID'
              readOnly
            />
          </div>

          <div className='form-group text-right'>
            <label htmlFor='recipeName' className='form-label '>
              اسم القسم
            </label>
            <input
              type='text'
              className='form-control'
              id='recipeCatName'
              value={ingerdCatName}
              onChange={(e) => setIngredCatName(e.target.value)}
              placeholder=' اسم القسم  '
            />
          </div>
          <div>
            {/* <Link to="RC"> */}
            <button type='button ' className='btn btn-dark  my-4'>
              اضف
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </div>
  )
}
