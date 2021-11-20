import React from "react";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../firebase";

const ListComponent = (props) => {
  const [Ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [currentCat, setCurrentCat] = useState({});
  const [personNum, setPersonNum] = useState([]);
  const [Category_of_ingredients, setCatIngred] = useState([]);
  const [unit, setUnit] = useState("");
  const [quant, setQuant] = useState("");

  useEffect(async () => {
    await onSnapshot(
      collection(db, "Categories_for_ingredients"),
      (snapshot) => {
        setCatIngred([
          {id:"0",ingCatName:"اخت التصتيف"},
          ...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        ]);
      }
    );
    console.log("Category_of_ingredients", Category_of_ingredients);
    setCurrentCat(Category_of_ingredients[0]);
    console.log("Current Category", currentCat);
    await TestQuery(currentCat.id);
  }, []);

  const TestQuery = async (id) => {
    console.log("call test query", id);
    const q = query(
      collection(db, "Ingredients"),
      where("categoryId", "==", `${id}`)
    );
    const querySnapshot = await getDocs(q);
    let list = [{id:"0",ingName:"اختر المكون"}];

    querySnapshot.forEach((Ingredient) => {
      let item = {
        ...Ingredient.data(),
        id: Ingredient.id,
      };
      list.push(item)
    });
    console.log("list", list);
    setIngredients(list);
    console.log("set Ingredients", Ingredients);
  };

  return (
    <div className="Component">
      <h1>{props.text}</h1>
      <h3 className=" text-dark text-right my-4">المقادير</h3>
      <div className="form-group text-right ingrediant">
        <div className="form-group text-right">
          <label for="FacultyAdress" className="form-label">
            التصنيف{" "}
          </label>
          <select
            className="form-select form-control"
            id="Category_of_ingredients"
            value={currentCat}
            onChange={(e) => {
              setCurrentCat(e.target.value);
              TestQuery(e.target.value);
              console.log("on change", e.target.value);
              //  let value = Array.from(e.target.selectedOptions, option => option.value);
              //  console.log(value);
              // setCategoryId(value);
            }}
          >
            {Category_of_ingredients.map((Category_of_ingredient) => {
              return (
                <option value={Category_of_ingredient.id}>
                  {" "}
                  {Category_of_ingredient.ingCatName}{" "}
                </option>
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
            value={currentIngredient}
            onChange={(e) => {
              setCurrentIngredient(e.target.value);
              console.log(e.target.value);
            }}
          >
            {Ingredients.map((Ingredient) => {
              if (Ingredient)
                return (
                  <option value={Ingredient.id}> {Ingredient.ingName} </option>
                );
            })}
          </select>
        </div>
        <div className="form-group text-right">
          <input
            type="number"
            className="form-control mt-2"
            id="quant"
            value={quant}
            onChange={(e) => {
              setQuant(e.target.value);
              console.log(e.target.value);
            }}
            placeholder=" الكمية"
          />
          <input
            type="number"
            className="form-control mt-2"
            id="personNum"
            placeholder=" تكفي كام شخص"
            value={personNum}
            onChange={(e) => {
              setPersonNum(e.target.value);
              console.log(e.target.value);
            }}
          />
          <select
            className="form-select form-select-sm mt-2"
            aria-label=".form-select-sm example"
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option selected>اختر الوحدة</option>
            <option value="جرام">جرام</option>
            <option value="كيلو">كيلو</option>
            <option value="لتر">لتر</option>
            <option value="كوب كبير"> كوب كبير</option>
            <option value="كوب صغير">كوب صغير</option>
            <option value="معلقة كبيرة">معلقة كبيرة</option>
            <option value="معلقة صغيرة">معلقة صغيرة</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export { ListComponent };
