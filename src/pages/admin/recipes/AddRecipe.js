import React from "react";
import "./Recipes.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc,query,where,getDocs } from "firebase/firestore";

import { db } from "../../../firebase";

export default function AddRecipe() {
  const [Ingredients,setIngredients]=useState("")
  const [Category_of_recipes,setRecipeCat]=useState([])
  const [recipeName, setRecipeName] = useState("");
  const [recipePreper, setRecipePreper] = useState("");
  const [recipeCat, setRecipeCatName] = useState("");
  const [Category_of_ingredients, setCatIngred] = useState([]);
  

  useEffect(
    () =>
      onSnapshot(collection(db, "Ingredients"), (snapshot) =>
        setIngredients(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "Category_of_recipes"), (snapshot) =>
        setRecipeCat(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "Categories_for_ingredients"), (snapshot) =>
      setCatIngred(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );
  TestQuery();
  async function TestQuery(){
    const q = query(collection(db,'Ingredients'),where("categoryId","==",'sYFdd3QFt6liCEo6O465')); //!=
    
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((Ingredients)=>{
        
        console.log(Ingredients.data().ingName);
    })
}

  const AddRecipeHandel = (e) => {
    e.preventDefault();
    db.collection("recipes")
      .add({
        recipeName,
        recipePreper,
       
      })
      .then(() => {
        alert("Recipe Added successefuly thum");
      })
      .catch((error) => {
        alert(error.message);
      });
    // setRecipeName("")
    // setRecipePreper("")
    // setRecipeIngredients("")
  };
  return (
    <div className=" add-recipe ">
      <form className="form" onSubmit={AddRecipeHandel}>
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
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder=" اسم الطبخة "
            />
          </div>
          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
              التصنيف{" "}
            </label>
            <select
              className="form-select form-control"
              id="FacultyAdress"
              value={recipeCat}
              onChange={(e) => {
                let value = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                console.log(value);
                setRecipeCatName(value);
              }}
              multiple
            >
              {Category_of_recipes.map((Category_of_recipe) => {
                return (
                  <option value={Category_of_recipe.id}>
                    
                    {Category_of_recipe.Name}
                  </option>
                );
              })}
            </select>
          </div>
          <h3 className=" text-dark text-right my-4">المقادير</h3>
          <hr />
          <div className="form-group text-right ingrediant">
            <div className="form-group text-right">
              <label for="FacultyAdress" className="form-label">
                التصنيف{" "}
              </label>
              <select
              className="form-select form-control"
              
              id="FacultyAdress"
              value={Category_of_ingredients}

              onChange={(e) =>{
                setCatIngred(e.target.value)
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
            <div className="form-group text-right">
              <label for="FacultyAdress" className="form-label">
                المكونات{" "}
              </label>
              <select
                className="form-select form-control"
                id="recipeIngredient"
                value={Ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                multiple
              >
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
              onChange={(e) => setRecipePreper(e.target.value)}
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
