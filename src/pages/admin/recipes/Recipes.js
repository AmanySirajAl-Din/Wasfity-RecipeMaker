import React from "react";
import "./Recipes.css";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, onSnapshot,doc, setDoc } from "firebase/firestore";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, "recipes"), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const AddRecipe=async ()=>{
      const docRef=doc(db,"recipes",'Rcp01');
      const payload=
      {
          Title:"مكرونة بشاميل",
          DegreeOfDifficulty:"سهل",
          Evaluation:5,
          Photo:"gggggg",
          TimePreper:"7hours",
          Video:"jkjjjjjjj"

      }
     await setDoc(docRef,payload)
  }

  return (
    
     
        <div className="Recipe-container">
            <nav class="navbar ">
         <div class="container-fluid">
         <a class="navbar-brand heading-word">Recipes</a>
         <form class="d-flex">
         <button class="btn btn-outline-warning" type="submit"onclick="addRecipe">Add</button>
          </form>
  </div>
</nav>
         
          <hr />

          <table class="table Recipe-container   table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
            {recipes.map((recipe) => {
            return  <tr>
                <th key={recipe.id} scope="row">
                  1
                </th>
                <td>{recipe.Title}</td>
                <td>{recipe.DegreeOfDifficulty}</td>
                <td>@mdo</td>
                <td>{recipe.DegreeOfDifficulty}</td>
                <td>@mdo</td>
                <td>{recipe.DegreeOfDifficulty}</td>
                <td>@mdo</td>
              </tr>;
              })}
            </tbody>
          </table>
        </div>
      
  
  );
}
