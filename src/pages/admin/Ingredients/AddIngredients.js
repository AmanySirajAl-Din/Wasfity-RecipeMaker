import React from "react";
import "./Ingredients.css";
import { useEffect, useState } from "react";

  import {db} from '../../../firebase'

export default function AddIngredients() {

    const [ingredientName,setIngredientName]=useState("")
    const [recipePreper,setRecipePreper]=useState("")
    const [recipeIngredients,setRecipeIngredients]=useState("")


    const AddRecipeHandel=(e)=>{
        e.preventDefault();
        db.collection("Ingredients").add({
          ingredientName,
            

        })
        .then(()=>{
            alert('ingredient Added successefuly thum')
        })
        .catch((error)=>{
            alert(error.message)
        });
        setIngredientName("")
        
    }
  return (
    <div className=" add-recipe ">
      <form  className="form"onSubmit={AddRecipeHandel}>
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
              id="ingredientName"
              value={ingredientName}
              onChange={(e)=>setIngredientName(e.target.value)}
              placeholder=" اسم المكون "
            />
          </div>
          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
              التصنيف{" "}
            </label>
            <select className="form-select form-control" id="FacultyAdress" multiple >
            <option> خضروات </option>
                <option>توابل</option>
                <option>معلبات</option>
                <option>لحوم</option>
                <option>فواكه</option>
             
            </select>
          </div>
          <button type="button" className="btn btn-success">
            اضف
          </button>
        </div>
      </form>
    </div>
  );
}
