import React from 'react'
import { useEffect, useState } from "react";
import './users.css'
import { db } from "../../../../firebase";
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

export default function User() {

  console.log("done cattttttttttttt");
    const [users, setUser] = useState([]);
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) =>
      setUser(snapshot.docs.map((doc) =>({...doc.data(),id:doc.id}) ))
      ),
    []
  );

//   const editRecipe = async (id) => {
//     const docRef = doc(db, "Category_of_recipes", id);
//     const payload = {
//       Name: "عنب",
//     };
//      await setDoc(docRef, payload);
//      console.log(  setDoc(docRef, payload).id)
//   };
//   const addRecipe = async () => {
//     const collectionRef = collection(db, "Category_of_recipes");
//     const payload = {
//       Name: "غداء",
     
//     };
//     await addDoc(collectionRef, payload);
//   };
  const deleteUser = async (id) => {
    const docRef = doc(db, "users", id);
     await deleteDoc(docRef);
     console.log(  deleteDoc(docRef).id)
  };

  return (
    <div className="users-container">
      <nav class="navbar ">
        <div class="container-fluid">
          <a class="navbar-brand heading-word ">Users</a>
          <div class="d-flex">
            <Link to="addUser">
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th key={user.id} scope="row">
                  1
                </th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                {/* <td><button onClick={()=>editRecipe(user.id)}>Edit</button></td> */}
                <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
