import React from 'react'
import { useEffect, useState } from 'react'
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import { db } from '../../../firebase'

const ListComponent = (props) => {
  const [Ingredients, setIngredients] = useState([])
  const [currentCat, setCurrentCat] = useState({})
  const [personNum, setPersonNum] = useState([])
  const [Category_of_ingredients, setCatIngred] = useState([])
  const [unit, setUnit] = useState('')
  const [quant, setQuant] = useState('')

  useEffect(() => {
    onSnapshot(collection(db, 'Categories_for_ingredients'), (snapshot) =>
      setCatIngred(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    )
  }, [])
  // console.log(Category_of_ingredients)

  useEffect(() => {
    setCurrentCat(Category_of_ingredients[0])
    // console.log(currentCat)
  }, [Category_of_ingredients])

  async function TestQuery(id) {
    const q = query(
      collection(db, 'Ingredients'),
      where('categoryId', '==', `${id}`)
    ) //!=

    const querySnapshot = await getDocs(q)
    // console.log(querySnapshot)
    querySnapshot.forEach((Ingredients) => {
      console.log(Ingredients.data().ingName, typeof Ingredients.data())
    })
  }
  let value
  return (
    <div className='Component'>
      <h1>{props.text}</h1>
      <h3 className=' text-dark text-right my-4'>المقادير</h3>
      <div className='form-group text-right ingrediant'>
        <div className='form-group text-right'>
          <label htmlFor='FacultyAdress' className='form-label'>
            التصنيف
          </label>
          <select
            className='form-select form-control'
            id='Category_of_ingredients'
            // value={Category_of_ingredients}

            onChange={(e) => {
              value = e.target.value
              // setCatIngred(e.target.value)
              // console.log(e.target.value)
              TestQuery(value).then((data) => data)
              //  let value = Array.from(e.target.selectedOptions, option => option.value);
              //  console.log(value);
              // setCategoryId(value);
            }}
          >
            {Category_of_ingredients.map((Category_of_ingredient, index) => {
              return (
                <option value={Category_of_ingredient.id} key={index}>
                  {Category_of_ingredient.ingCatName}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group text-right'>
          <label htmlFor='FacultyAdress' className='form-label'>
            المكونات
          </label>
          <select
            className='form-select form-control'
            id='recipeIngredient'
            value={Ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          >
            {Ingredients.map((Ingredient, index) => {
              return (
                <option key={index} value={Ingredient.id}>
                  {Ingredient.ingName}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group text-right'>
          <input
            type='number'
            className='form-control mt-2'
            id='quant'
            value={quant}
            onChange={(e) => {
              setQuant(e.target.value)
              console.log(e.target.value)
            }}
            placeholder=' الكمية'
          />
          <input
            type='number'
            className='form-control mt-2'
            id='personNum'
            placeholder=' تكفي كام شخص'
            value={personNum}
            onChange={(e) => {
              setPersonNum(e.target.value)
              console.log(e.target.value)
            }}
          />
          <select
            className='form-select form-select-sm mt-2'
            aria-label='.form-select-sm example'
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value)
              console.log(e.target.value)
            }}
          >
            <option selected>اختر الوحدة</option>
            <option value='جرام'>جرام</option>
            <option value='كيلو'>كيلو</option>
            <option value='لتر'>لتر</option>
            <option value='كوب كبير'> كوب كبير</option>
            <option value='كوب صغير'>كوب صغير</option>
            <option value='معلقة كبيرة'>معلقة كبيرة</option>
            <option value='معلقة صغيرة'>معلقة صغيرة</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export { ListComponent }
