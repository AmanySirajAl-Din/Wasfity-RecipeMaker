import React from "react";
import "./Ingredients.css";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  collection,
  onSnapshot,
  addDoc 
  
} from "firebase/firestore";

export default function AddIngredients() {
  const history = useHistory();
  const [Category_of_ingredients, setCatingred] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  
  useEffect(
    () =>
      onSnapshot(collection(db, "Categories_for_ingredients"), (snapshot) =>
      setCatingred(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );
  
  const editHandel = (e) => {
    e.preventDefault();
        const docRef = doc(db, "Ingredients", id);
        const payload = {
            ingName:ingredientName,
            categoryId:categoryId
        };
       setDoc(docRef, payload)
      .then(() => {
        alert("ingredient Added successefuly thum");
        return  history.push("/Ingredients")
      })
      .catch((error) => {
        alert(error.message);
      });
    setIngredientName("");
  };
  return (
    <div className=" add-ingredient ">
      <form className="form add-ingredient" onSubmit={editHandel}>
        <div className="mt-4 p-5" dir="rtl">
          <h1 className="text-center text-black">اضافة مكون</h1>
          <div className="form-group text-right">
            <label for="studentId" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="ingredientId"
              placeholder="ID"
              readonly
            />
          </div>

          <div className="form-group text-right">
            <label for="ingredientName" className="form-label ">
              {" "}
              اسم المكون
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
              placeholder=" اسم المكون "
            />
          </div>
          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
              التصنيف{" "}
            </label>
            
            <select
              className="form-select form-control"
              
              id="FacultyAdress"
              value={categoryId}

              onChange={(e) =>{
                setCategoryId(e.target.value)
                console.log(e.target.value)
      
        //  let value = Array.from(e.target.selectedOptions, option => option.value);
        //  console.log(value);
        // setCategoryId(value);
  

            } }
        >
              {Category_of_ingredients.map((Category_of_ingredient) => {
              return (
              <option value={Category_of_ingredient.id}> {Category_of_ingredient.ingCatName} </option>
              );
            })}
            </select>
          </div>
          
          <button  className="btn btn-dark">
           حفظ
          </button>
          
        </div>
      </form>
    </div>
  );
}
