import React from "react";
import { db, app } from "../../../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import "./Categories_for_ingredients.css";
import { useHistory } from "react-router-dom";
import { getStorage, ref as storageRef,getDownloadURL ,uploadBytesResumable} from "firebase/storage";

export default function AddIngredCat() {
  
  const [ingerdCatName, setIngredCatName] = useState("");
  const [image, setImage] = useState(null);
  const history = useHistory();
   
   const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(true);

  function handelChange(e) {
    if (e.target.files[0],'name',{
      writable:true,
      value:new Date()
    }) 
      setImage(e.target.files[0])


  }
    
  
  async function handelUpload() {

  const storage = getStorage(app);
  const storageReff=storageRef(storage)
  const imagesRef = storageRef(storageReff, `images/${image.name}`);
  const uploadTask=uploadBytesResumable(imagesRef,image);

  console.log(uploadTask);
  uploadTask.on(
    "state_changed",(snapshot)=>{
      const prog =Math.round(
        (snapshot.bytesTransferred/snapshot.totalBytes)*100

      );
      setProgress(prog);
    },
    (error)=> console.log(error),
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{

        console.log("file available at ",downloadURL);
        setUrl(downloadURL)
      });
     
    }
  )
  
  
  console.log(url);
  }

  const AddIngredCatHandel = (e) => {
    e.preventDefault();
    

    addDoc(collection(db, "Categories_for_ingredients"), {
      ingCatName: ingerdCatName,
      imagePath:url
    })
      .then(() => {
        // setError("");
        setLoading(true)
        alert("Recipe Added successefuly 👍");
        return history.push("/IC");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false)
        
      });

        addDoc(collection(db, "Categories_for_ingredients"), {
      ingCatName: ingerdCatName,
      imagePath:url
    })
      .then(() => {
        // setError("");
        setLoading(true)
        alert("Recipe Added successefuly 👍");
        return history.push("/IC");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false)
        
      });
    // setRecipeCatName("")
  };
  
  
  return (
    <div className=" add-category">
      <form className="form" onSubmit={AddIngredCatHandel}>
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
              value={ingerdCatName}
              onChange={(e) => setIngredCatName(e.target.value)}
              placeholder=" اسم القسم  "
            />
          </div>
          <label className="text-primary font-weight-bold mb-2">
            Service Image{" "}
          </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            required
            onChange={handelChange}
          />
          {loading && <label>loading</label>}

          <button onClick={handelUpload} className="btn-upload-gradiant">
            Upload
          </button>
          <div>
            {/* <Link to="RC"> */}
            <button type="button " className="btn btn-dark  my-4">
              اضف
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
};

