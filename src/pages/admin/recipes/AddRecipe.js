import React from "react";
import "./Recipes.css";
import { useEffect, useState } from "react";

  import {db} from '../../../firebase'

export default function AddRecipe() {

    const [recipeName,setRecipeName]=useState("")
    const [recipePreper,setRecipePreper]=useState("")
    const [recipeIngredients,setRecipeIngredients]=useState("")


    const AddRecipeHandel=(e)=>{
        e.preventDefault();
        db.collection("recipes").add({
            recipeName,
            recipePreper,
            recipeIngredients,

        })
        .then(()=>{
            alert('Recipe Added successefuly thum')
        })
        .catch((error)=>{
            alert(error.message)
        });
        setRecipeName("")
        setRecipePreper("")
        setRecipeIngredients("")
    }
  return (
    <div className=" add-recipe ">
      <form  className="form"onSubmit={AddRecipeHandel}>
        <div className="mt-4 p-5" dir="rtl">
          <h1 className="text-center text-black">اضافة طبخة</h1>
          <div className="form-group text-right">
            <label for="studentId" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeId"
              placeholder="ID"
              readonly
            />
          </div>

          <div className="form-group text-right">
            <label for="recipeName" className="form-label ">
              {" "}
              اسم الطبخة
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeName"
              value={recipeName}
              onChange={(e)=>setRecipeName(e.target.value)}
              placeholder=" اسم الطبخة "
            />
          </div>
          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
              التصنيف{" "}
            </label>
            <select className="form-select form-control" id="FacultyAdress" multiple >
              <option> لحوم و مشويات</option>
              <option>معجنات</option>
              <option>مخبوزات</option>
              <option>مشروبات</option>
              <option>فطار</option>
              <option>غداء</option>
              <option>عشاء</option>
            </select>
          </div>
          <h3 className=" text-dark text-right my-4">المقادير</h3>
          <hr />
          <div className="form-group text-right ingrediant">
            <div className="form-group text-right">
              <label for="FacultyAdress" className="form-label">
                التصنيف{" "}
              </label>
              <select className="form-select form-control" id="FacultyAdress">
                <option> خضروات </option>
                <option>توابل</option>
                <option>معلبات</option>
                <option>لحوم</option>
                <option>فواكه</option>
              </select>
            </div>
            <div className="form-group text-right">
              <label for="FacultyAdress" className="form-label">
                المكونات{" "}
              </label>
              <select className="form-select form-control"
               id="recipeIngredient"   
              value={recipeIngredients}
              onChange={(e)=>setRecipeIngredients(e.target.value)}
              multiple   >
                <option> طماطم </option>
                <option>بطاطس</option>
                <option>جزر</option>
                <option>لحمة مفرومة</option>
              </select>
            </div>
            <div className="form-group text-right">
              <label for="FacultyAdress" className="form-label">
                العدد{" "}
              </label>
              <input
                type="number"
                className="form-control"
                id="fname"
                placeholder=" العدد"
              />
            </div>
          </div>
        </div>
        <div className=" mt-4 p-5" dir="rtl">
          <div className="form-group text-right">
            <label for="fname" className="form-label">
              طريقة التحضير{" "}
            </label>
            <textarea
              className="form-control"
              id="recipePreper"
              value={recipePreper}
              onChange={(e)=>setRecipePreper(e.target.value)}
              placeholder="طريقة التحضير"
            />
          </div>
          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
              درجة الصعوبة{" "}
            </label>
            <select className="form-select form-control" id="FacultyAdress">
              <option>سهل</option>
              <option>متوسط</option>
              <option>صعب</option>
            </select>
          </div>

          <div className="form-group text-right">
            <label for="studentId" className="form-label">
              {" "}
              التقييم
            </label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              placeholder=" التقييم "
            />
          </div>
          <br />
          <button type="button" className="btn btn-success">
            اضف
          </button>
        </div>
      </form>
    </div>
  );
}
