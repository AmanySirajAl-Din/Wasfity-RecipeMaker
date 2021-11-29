// import React from 'react'
// import { db, app } from '../../../../firebase'
// import { useState,useEffect } from 'react'
// import { collection, addDoc,doc,getDoc, onSnapshot,updateDoc,setDoc } from 'firebase/firestore'
// import './Categories_for_ingredients.css'
// import { useHistory } from 'react-router-dom'
// import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'


// export default function EditaIngredCat() {
//   const [ingerdCatName, setIngredCatName] = useState('')
//   const [Category_of_ingredients, setCatingred] = useState([]);
//   const history = useHistory()

//   useEffect(
//     () =>
//       onSnapshot(collection(db, "Categories_for_ingredients"), (snapshot) =>
//       setCatingred(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
//       ),
//     []
//   );



//   const EditIngredCatHandel = (e) => {
//         e.preventDefault();
//             const docRef = doc(db, "Categories_for_ingredients",id);
//             const payload = {
//               ingerdCatName:ingerdCatName,
//             };
//            setDoc(docRef, payload)
//           .then(() => {
//             alert("ingredient Added successefuly thum");
//             return  history.push("/IC")
//           })
//           .catch((error) => {
//             alert(error.message);
//           });
//           setIngredCatName("");
//       };
//   // const EditIngredCatHandel= async (id) => {
//   //   const docRef = doc(db, "Categories_for_ingredients", id);
//   //   const payload = {
//   //     ingerdCatName:ingerdCatName,
//   //     // createdAt: new Date(),
//   //   };
//   //    await setDoc(docRef, payload);
//   //    console.log(  setDoc(docRef, payload).id)
  
//   //    alert("Category_for_ingredient  Added successefuly  👍");
//   //    return history.push("IC");
  
   
       
       
  
      


     
//   // }

//     // async function EditIngredCatHandel(Categories_for_ingredients, id){
//     //   const docRef = doc(db,Categories_for_ingredients , id);
//     //   const docSnap = await getDoc(docRef);
//     //   if (docSnap.exists()) {
//     //     return docSnap.data()
//     //   } else {
//     //    return  console.log("No such document!");
//     //   }
    
//     // }
  




  
//   return (
//     <div className=' add-category'>
//       <form className='form' onSubmit={EditIngredCatHandel}>
//         <div className='mt-4 p-5' dir='rtl'>
//           <h1 className='text-center text-black'>اضافة قسم</h1>
//           <div className='form-group text-right'>
//             <label htmlFor='recipeCatId' className='form-label'>
//               ID
//             </label>
//             <input
//               type='text'
//               className='form-control'
//               id='recipeCatId'
//               placeholder='ID'
//               readOnly
//             />
//           </div>

//           <div className='form-group text-right'>
//             <label htmlFor='recipeName' className='form-label '>
//               اسم القسم
//             </label>
//             <input
//               type='text'
//               className='form-control'
//               id='recipeCatName'
//               value={ingerdCatName}
//               onChange={(e) => setIngredCatName(e.target.value)}
//               placeholder=' اسم القسم  '
//             />
//           </div>
//           <div>
//             {/* <Link to="RC"> */}
//             <button type='button ' className='btn btn-dark  my-4'>
//               اضف
//             </button>
//             {/* </Link> */}
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }
