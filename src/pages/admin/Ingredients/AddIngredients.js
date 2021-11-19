import React from "react";
import "./Ingredients.css";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { useHistory } from "react-router-dom";

import {
  collection,
  onSnapshot,
  addDoc,
  getDocs,
  where,
  query,
  
  
} from "firebase/firestore";

export default function AddIngredients() {
  const history = useHistory();
  const [Category_of_ingredients, setCatIngred] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  
  useEffect(
    () =>
      onSnapshot(collection(db, "Categories_for_ingredients"), (snapshot) =>
      setCatIngred(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );
  
  const AddHandel = (e) => {
    e.preventDefault();
      //  console.log("add")

         addDoc(collection(db, "Ingredients"), {
           
        ingName:ingredientName,
        categoryId:categoryId
     
    })
 
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
      <form className="form add-ingredient" onSubmit={AddHandel}>
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
                let value=e.target.value;
                console.log(value)
      
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
            اضف
          </button>
          
          
        </div>
      </form>
    </div>
  );
}
