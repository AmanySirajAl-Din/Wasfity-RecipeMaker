import React from 'react'
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

export default function Categories_for_ingredients() {
    const [Category_of_ingredients, setCatingred] = useState([]);
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, "Categories_for_ingredients"), (snapshot) =>
      setCatingred(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );

  const editRecipe = async (id) => {
    const docRef = doc(db, "Categories_for_ingredients", id);
    const payload = {
      Name: "عنب",
    };
     await setDoc(docRef, payload);
     console.log(  setDoc(docRef, payload).id)
  };
  const addRecipe = async () => {
    const collectionRef = collection(db, "Categories_for_ingredients");
    const payload = {
      Name: "غداء",
     
    };
    await addDoc(collectionRef, payload);
  };
  const deleteRecipe = async (id) => {
    const docRef = doc(db, "Categories_for_ingredients", id);
     await deleteDoc(docRef);
     console.log(  deleteDoc(docRef).id)
  };

  return (
    <div className="RecipeCat-container">
      <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand heading-word ">Category_of_ingredients</a>
          <div class="d-flex">
            <Link to="AddIngredCat">
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
          {Category_of_ingredients.map((Category_of_ingredient) => {
            return (
              <tr>
                <th key={Category_of_ingredient.id} scope="row">
                  1
                </th>
                <td>{Category_of_ingredient.ingCatName}</td>
                <td><button onClick={()=>editRecipe(Category_of_ingredient.id)}>Edit</button></td>
                <td><button onClick={()=>deleteRecipe(Category_of_ingredient.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

