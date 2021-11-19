import React from "react";
import "./Recipes.css";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Buttonn } from "../../../components/admin/FormIngredients/Buttonn";
import { ListComponent } from "../../../components/admin/FormIngredients/ListComponent";
import { db } from "../../../firebase";

export default function AddRecipe() {
  // const [Ingredients, setIngredients] = useState("");
  const [recipeId, setRecipeId] = useState("");
  const [Category_of_recipes, setRecipeCat] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [recipePreper, setRecipePreper] = useState("");
  // const [recipeCat, setRecipeCatName] = useState("");
  const [DegreeOfDifficulty, setDegreeOfDifficulty] = useState("");
  // const [categoryIngredId, setCategoryId] = useState("");
  const [categoryRecipeId, setCategoryRecipeId] = useState("");
  // const [Category_of_ingredients, setCatIngred] = useState([]);
  const [components, setComponents] = useState(["First Ingredient"]);
  const [componentNames, setComponentNames] = useState([
    "second gredient",
    "Third Ingredient",
    "Fourth Ingredient",
    "Saturn",
    "Uranus",
    "Neptune",
  ]);

  function addComponent(e) {
    e.preventDefault();

    if (componentNames.length > 0) {
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
    } else {
      window.alert("not allowed to add more ingredient");
    }
  }

  useEffect(
    () =>
      onSnapshot(collection(db, "Category_of_recipes"), (snapshot) =>
        setRecipeCat(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  const AddRecipeHandel = (e) => {
    e.preventDefault();

    //ADD data in recipes collection
    db.collection("recipes")
      .add({
        recipeName: recipeName,
        categoryRecipeId: categoryRecipeId,
        recipePreper: recipePreper,
        DegreeOfDifficulty: DegreeOfDifficulty,
      })
      .then((data) => {
        setRecipeId(data.id);
        alert("Recipe Added successefuly thum");

        console.log("done");
        // Add data in Ingredients_of_recipe collection
      })
      .catch((error) => {
        alert(error.message);
      });
    db.collection("Ingredients_of_recipe")
      .add({
        recipeId: recipeId,
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
              value={categoryRecipeId}
              onChange={(e) => {
                let value = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                console.log(value);
                setCategoryRecipeId(value);
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
          <div>
            <Buttonn
              onClick={addComponent}
              text={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#F8AB15"
                  class="bi bi-patch-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                </svg>
              }
            />

            {components.map((item, i) => (
              <ListComponent text={item} />
            ))}
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
            <select
              className="form-select form-control"
              id="FacultyAdress"
              value={DegreeOfDifficulty}
              onChange={(e) => {
                setDegreeOfDifficulty(e.target.value);
                console.log(e.target.value);
              }}
            >
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
              readOnly
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
