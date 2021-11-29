import React from "react";
import { useState } from "react";
import { db, app } from "../../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
// firestore configration 




export default function AddRecipeCat(props) {
  const [recipeCatName, setRecipeCatName] = useState("");
  const [quant, setQuant] = useState("");
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  



  const AddRecpCatHandel = (e) => {
    e.preventDefault();

    addDoc(collection(db, "Category_of_recipes"), {
      Name: recipeCatName,
      imagePath: url,
      createdAt: new Date(),
    })
      .then((data) => {
        alert("Recipe Added successefuly 👍");
        return history.push("/Dashboard/RC");
      })
      .catch((error) => {
        alert(error.message);
      });

    // setRecipeCatName("")
    }

    function handelChange(e) {
      if (
        (e.target.files[0],
        "name",
        {
          writable: true,
          value: new Date(),
        })
      )
        setImage(e.target.files[0]);
    }

    async function handelUpload(e) {
      e.preventDefault();
  
      const storage = getStorage(app);
      const storageReff = storageRef(storage);
      const imagesRef = storageRef(storageReff, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, image);
  
      console.log(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("file available at ", downloadURL);
            setUrl(downloadURL);
          });
        }
      );
  
      console.log(url);
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
              required
            />
          </div>
          <div className="my-4 bg-light p-3">
            <label className="text-primary font-weight-bold mb-2">
            {loading && (
              <label>
                <img
                  src={url || "http://via.placeholder.com/100"}
                  alt="firebase-image"
                  width="100"
                  height="100"
                />
                <div> Recipe Imege</div>
                
                <progress value={progress} max="100" />
              </label>
            )}
            </label>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              required
              onChange={handelChange}
            />
           

            <button className="btn-upload-gradiant" onClick={handelUpload}>
              Upload
            </button>
          </div>
         
        
          <div>
            {/* <Link to="RC"> */}
            <button type="button " className="btn btn-dark my-4">
              اضف
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}
