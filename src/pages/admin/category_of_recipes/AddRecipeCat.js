import React from "react";
import { db } from "../../../firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function AddRecipeCat() {
  const [recipeCatName, setRecipeCatName] = useState("");

  const AddRecpCatHandel = (e) => {
    e.preventDefault();
    addDoc(collection(db, "Category_of_recipes"), {
      Name: recipeCatName,
    })
      .then(() => {
        alert("Recipe Added successefuly 👍");
      })
      .catch((error) => {
        alert(error.message);
      });
    // setRecipeCatName("")
  };
  return (
    <div className=" add-category">
      <form className="form" onSubmit={AddRecpCatHandel}>
        <div className="mt-4 p-5" dir="rtl">
          <h1 className="text-center text-black">اضافة قسم</h1>
          <div className="form-group text-right">
            <label for="recipeCatId" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeCatId"
              placeholder="ID"
              readonly
            />
          </div>

          <div className="form-group text-right">
            <label for="recipeName" className="form-label ">
              {" "}
              اسم القسم
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeCatName"
              value={recipeCatName}
              onChange={(e) => setRecipeCatName(e.target.value)}
              placeholder=" اسم القسم  "
            />
          </div>
          <div>
            {/* <Link to="RC"> */}
              <button type="button " className="btn btn-warning my-4">
                اضف
              </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}
