import React from "react";
import "./Recipes.css";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {  Link } from "react-router-dom";

import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, "recipes"), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );

  const editRecipe = async (id) => {
    const docRef = doc(db, "recipes", id);
    const payload = {
      Title: "عنب",
      DegreeOfDifficulty: "سهل",
      Evaluation: 5,
      Photo: "gggggg",
      TimePreper: "7hours",
      Video: "jkjjjjjjj",
      ReciprPrepare: "iii",
    };
     await setDoc(docRef, payload);
     console.log(  setDoc(docRef, payload).id)
  };
  const addRecipe = async () => {
    const collectionRef = collection(db, "recipes");
    const payload = {
      Title: "محشي",
      DegreeOfDifficulty: "سهل",
      Evaluation: 5,
      Photo: "gggggg",
      TimePreper: "7hours",
      Video: "jkjjjjjjj",
      ReciprPrepare: "iii",
    };
    await addDoc(collectionRef, payload);
  };
  const deleteRecipe = async (id) => {
    const docRef = doc(db, "recipes", id);
     await deleteDoc(docRef);
     console.log(  deleteDoc(docRef).id)
  };

  return (
    <div className="Recipe-container">
      <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand heading-word ">Recipes</a>
          <div class="d-flex">
            <Link to="addRecipe">
              <button class="btn btn-outline-warning" >
                Add
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <hr />

      <table class="table Recipe-container  text-black table-hover">
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
            return (
              <tr>
                <th key={recipe.id} scope="row">
                  1
                </th>
                <td>{recipe.Title}</td>
                <td>{recipe.DegreeOfDifficulty}</td>
                <td>@mdo</td>
                <td>{recipe.DegreeOfDifficulty}</td>
                <td>@mdo</td>
                <td>{recipe.DegreeOfDifficulty}</td>
                <td><button onClick={()=>editRecipe(recipe.id)}>Edit</button></td>
                <td><button onClick={()=>deleteRecipe(recipe.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
