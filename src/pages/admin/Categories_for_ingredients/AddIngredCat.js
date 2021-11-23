import React from 'react'
import { db, app } from '../../../firebase'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import './Categories_for_ingredients.css'
import { useHistory } from 'react-router-dom'
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'

export default function AddIngredCat() {
<<<<<<< HEAD
  
  const [ingerdCatName, setIngredCatName] = useState("");
  const history = useHistory();
   

  
    
  
 
=======
  const [ingerdCatName, setIngredCatName] = useState('')
  const [image, setImage] = useState(null)
  const history = useHistory()

  function handelChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0])

      console.log('ss')
    }
  }
  function handelUpload() {
    const storage = getStorage(app)
    const imagesRef = storageRef(storage, `images/${image.name}`)
    uploadBytes(imagesRef, image).then((snapshot) => {
      console.log(image)
      console.log('Uploaded a blob or file!')
    })
  }
>>>>>>> de7fb182cd5e4250341548d0302f1d9da1afa372

  const AddIngredCatHandel = (e) => {
    e.preventDefault()

    addDoc(collection(db, 'Categories_for_ingredients'), {
      ingCatName: ingerdCatName,
<<<<<<< HEAD
      
    })
      .then(() => {
        // setError("");
        
        alert("Recipe Added successefuly 👍");
        return history.push("/IC");
      })
      .catch((error) => {
        alert(error.message);
        
        
      });

       
=======
    })
      .then(() => {
        alert('Recipe Added successefuly 👍')
        return history.push('/IC')
      })
      .catch((error) => {
        alert(error.message)
      })
>>>>>>> de7fb182cd5e4250341548d0302f1d9da1afa372
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
<<<<<<< HEAD
=======
          <label className='text-primary font-weight-bold mb-2'>
            Service Image{' '}
          </label>
          <input
            type='file'
            accept='.png, .jpg, .jpeg'
            required
            onChange={handelChange}
          />
          <button onClick={handelUpload} className='btn-upload-gradiant'>
            Upload
          </button>
>>>>>>> de7fb182cd5e4250341548d0302f1d9da1afa372
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
