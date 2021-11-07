import React from 'react'
import { useEffect, useState } from "react";
import './Category_of_recipes.css'
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

export default function Category_of_recipes() {
    const [Category_of_recipes, setCatRecipes] = useState([]);
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, "Category_of_recipes"), (snapshot) =>
      setCatRecipes(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );

  const editRecipe = async (id) => {
    const docRef = doc(db, "Category_of_recipes", id);
    const payload = {
      Name: "عنب",
    };
     await setDoc(docRef, payload);
     console.log(  setDoc(docRef, payload).id)
  };
  const addRecipe = async () => {
    const collectionRef = collection(db, "Category_of_recipes");
    const payload = {
      Name: "غداء",
     
    };
    await addDoc(collectionRef, payload);
  };
  const deleteRecipe = async (id) => {
    const docRef = doc(db, "Category_of_recipes", id);
     await deleteDoc(docRef);
     console.log(  deleteDoc(docRef).id)
  };

  return (
    <div className="RecipeCat-container">
      <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand heading-word ">Recipes</a>
          <div class="d-flex">
            <Link to="addRecipeCat">
              <button class="btn btn-outline-warning" >
                Add
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <hr />

      <table class="table RecipeCat-container  text-black table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {Category_of_recipes.map((Category_of_recipe) => {
            return (
              <tr>
                <th key={Category_of_recipe.id} scope="row">
                  1
                </th>
                <td>{Category_of_recipe.Name}</td>
                <td><button onClick={()=>editRecipe(Category_of_recipe.id)}>Edit</button></td>
                <td><button onClick={()=>deleteRecipe(Category_of_recipe.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
