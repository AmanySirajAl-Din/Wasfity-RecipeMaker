import React from 'react'
import { db, app } from '../../../../firebase'
import { useState,useEffect } from 'react'
import { collection, addDoc,doc,getDoc, onSnapshot,updateDoc,setDoc } from 'firebase/firestore'
import './Recipes.css'
import { useHistory,useParams } from 'react-router-dom'
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'


export default function EditRecipes(props) {
  const [ingerdCatName, setIngredCatName] = useState('')
  const prams=useParams()
  const { id } = props.match.params;
  const [recipeId, setRecipeId] = useState('')
  const [Category_of_recipes, setRecipeCat] = useState([])
  const [recipePreperTime, setRecipePreperTime] = useState('')
  const [recipeName, setRecipeName] = useState('')
  const [recipePreper, setRecipePreper] = useState('')
  const [DegreeOfDifficulty, setDegreeOfDifficulty] = useState('')
  const [categoryRecipeId, setCategoryRecipeId] = useState('')
  let [index, setIndex] = useState(0)
  const [Ingredients, setIngredients] = useState([])
  const [currentIngredient, setCurrentIngredient] = useState({})
  const [currentCat, setCurrentCat] = useState({})
  const [personNum, setPersonNum] = useState([])
  const [Category_of_ingredients, setCatIngred] = useState([])
  const [unit, setUnit] = useState('')
  const [quant, setQuant] = useState('')
  const [ingredientList, setIngredientList] = useState([])
  const history = useHistory()
  const [recipePreperList, setRecipePreperList] = useState([])
  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [recipeDescription, setRecipeDescription] = useState('')

  useEffect(
    () =>
    {
        
        getSingleRecipe().then((value)=>{
            // console.log(value)
            setIngredCatName(value.ingCatName)
            // console.log(ingerdCatName)
        })
    },
     
    []
  );

  async function getSingleRecipe(){
    const docRef = doc(db,"Categories_for_ingredients" , id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
     return  console.log("No such document!");
    }
  
}


async function EditIngredCatHandel(e ){
    e.preventDefault();
        const alyDocRef = doc(db, "Categories_for_ingredients",id);
        await updateDoc(alyDocRef, { 
            ingCatName: ingerdCatName,
        }).then(() => {
                alert("ingredient Category Added successefuly thum");
                return history.push('Dashboard/IC')
              })
              .catch((error) => {
                alert(error.message);
              });
    }
 

    
   
  



  
  return (
    <div className=' add-category'>
      <form className='form' onSubmit={EditIngredCatHandel}>
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
