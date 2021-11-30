import React from "react";
import "./Recipes.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
//  Image configration
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
// firestore configration
import { db, app } from "../../../../firebase";
import Category_of_recipes from "./../category_of_recipes/Category_of_recipes";
import Ingredients from "./../Ingredients/Ingredients";

export default function AddRecipe(props) {
  const [recipeId, setRecipeId] = useState("");
  const [Category_of_recipes, setRecipeCat] = useState([]);
  const [recipePreperTime, setRecipePreperTime] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipePreper, setRecipePreper] = useState("");
  const [DegreeOfDifficulty, setDegreeOfDifficulty] = useState("");
  const [categoryRecipeId, setCategoryRecipeId] = useState("");
  let [index, setIndex] = useState(0);
  const [Ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [currentCat, setCurrentCat] = useState({});
  const [personNum, setPersonNum] = useState([]);
  const [Category_of_ingredients, setCatIngred] = useState([]);
  const [unit, setUnit] = useState("");
  const [quant, setQuant] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const history = useHistory();
  const [recipePreperList, setRecipePreperList] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [recipeDescription, setRecipeDescription] = useState("");

  useEffect(async () => {
    await onSnapshot(
      collection(db, "Categories_for_ingredients"),
      (snapshot) => {
        setCatIngred([
          { id: "0", ingCatName: "Select" },
          ...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        ]);
      }
    );
    console.log("Category_of_ingredients", Category_of_ingredients);
    setCurrentCat(Category_of_ingredients[0]);
    console.log("Current Category", currentCat);
    await TestQuery(currentCat.id);
  }, []);

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
  }

  const TestQuery = async (id) => {
    console.log("call test query", id);
    const q = query(
      collection(db, "Ingredients"),
      where("categoryId", "==", `${id}`)
    );
    const querySnapshot = await getDocs(q);
    let list = [{ id: "0", ingName: "اختر المكون" }];

    querySnapshot.forEach((Ingredient) => {
      let item = {
        ...Ingredient.data(),
        id: Ingredient.id,
      };
      list.push(item);
    });
    console.log("list", list);
    setIngredients(list);
    console.log("set Ingredients", Ingredients);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "Category_of_recipes"), (snapshot) =>
        setRecipeCat(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  // To push all preperation steps in list
  function RecipePreperList(e) {
    e.preventDefault();
    setIndex(++index);
    // console.log(index);
    setRecipePreperList([
      ...recipePreperList,
      {
        index: index,
        recipePreper: recipePreper,
      },
    ]);
    console.log(recipePreperList);
    setRecipePreper("");
  }

  function addIngerdRecipe(e) {
    e.preventDefault();
    setIndex(++index);
    // console.log(index);
    setIngredientList([
      ...ingredientList,
      {
        currentCat: currentCat,
        currentIngredient: currentIngredient,

        quant: quant,
        unit: unit,
        index: index,
      },
    ]);
    console.log(ingredientList);
  }
  const AddRecipeHandel = (e) => {
    e.preventDefault();
    setIndex(++index);
    addDoc(collection(db, "recipes"), {
      index: index,
      recipeName: recipeName,
      recipeCat: recipeName,
      categoryRecipeId: categoryRecipeId,
      recipePreperList: recipePreperList,
      DegreeOfDifficulty: DegreeOfDifficulty,
      imagePath: url,
      personNum: personNum,
      recipePreperTime: recipePreperTime,
      createdAt: new Date(),
    })
      .then((data) => {
        console.log(data.id);
        setLoading(true);
        addDoc(collection(db, "Ingredients_of_recipe"), {
          ingredientList: ingredientList,
          recipeId: data.id,
        }).catch((error) => {
          alert(error.message);
          setLoading(false);
        });
        alert("Recipe Added successefuly 👍");
        return history.push("Dashboard/R");
      })
      .catch((error) => {
        alert(error.message);
      });

    // setRecipeCatName("")
  };

  return (
    <div className=" add-recipe ">
      <form className="form" onSubmit={AddRecipeHandel}>
        <div className="mt-0 p-5" dir="rtl">
          <h1 className="text-center text-black"> Add recipe</h1>
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
              Recipe className{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeName"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="  Recipe Name "
            />
          </div>
          <div className="form-group text-right">
            <label for="recipeName" className="form-label ">
              {" "}
              Recipe Describtion{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeDescreption"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
              placeholder=" Recipe Describtion "
            />
          </div>
          <div className="my-4 bg-light p-3">
            <label className="text-primary font-weight-bold mb-2">
              {loading && (
                <label>
                  <img
                    src={url || "http://via.placeholder.com/100"}
                    alt="firebase"
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
          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
              Category{" "}
            </label>
            <select
              className="form-select form-control"
              id="categoryRecipeId"
              value={categoryRecipeId}
              onChange={(e) => {
                let value = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                console.log(value);
                setCategoryRecipeId(value);
              }}
              // multiple
              size="1"
            >
              {Category_of_recipes.map((Category_of_recipe) => {
                return (
                  <option
                    value={(Category_of_recipe.id, Category_of_recipe.Name)}
                  >
                    {Category_of_recipe.Name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <div className="d-flex mt-4">
              <div className="Component">
                <h1>{props.text}</h1>
                <h3 className=" text-dark text-right my-4 ">المقادير</h3>
                <div className="form-group text-right ingrediant-recipe">
                  <div className="form-group text-right ingrediant-recipe">
                    <label for="FacultyAdress" className="form-label">
                      Category{" "}
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
                            <option value={Ingredient.id}>
                              {" "}
                              {Ingredient.ingName}{" "}
                            </option>
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
                      placeholder=" Quantity"
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
                      <option selected> Select Unit</option>
                      <option value="Giram">geram</option>
                      <option value="Kilo">Kilo</option>
                      <option value="Liter">Liter</option>
                      <option value=" Big cup"> Big cup</option>
                      <option value="Small Cup">cup Small</option>
                      <option value="معلقة كبيرة">معلقة كبيرة</option>
                      <option value="معلقة صغيرة">معلقة صغيرة</option>
                    </select>
                    <button className="add-btn" onClick={addIngerdRecipe}>
                      {" "}
                      Add Ingredient
                    </button>
                  </div>
                </div>
              </div>
              <div className="ingred-table">
                <table class="table ">
                  <thead>
                    <tr>
                      <th>Delete</th>
                      <th>Edit</th>
                      <th scope="col">Index</th>
                      <th scope="col">Category</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredientList.map((ingredlist) => {
                      return (
                        <tr>
                          <td>Delete</td>
                          <td>Edit</td>
                          <th>{ingredlist.index}</th>
                          <td>{ingredlist.quant}</td>
                          <td>{ingredlist.unit}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 p-5" dir="rtl">
          <div className="d-flex mt-4">
            <div className="Component">
              <div className="form-group text-right">
                <label for="fname" className="form-label">
                  Preperation Recipes steps{" "}
                </label>
                <textarea
                  className="form-control"
                  id="recipePreper"
                  value={recipePreper}
                  onChange={(e) => setRecipePreper(e.target.value)}
                  placeholder="Recipe Preper"
                />
              </div>

              <button className="add-btn btn-dark" onClick={RecipePreperList}>
                {" "}
                اضف
              </button>
            </div>
            <div className="ingred-table">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">recipePreper </th>
                  </tr>
                </thead>
                <tbody>
                  {recipePreperList.map((recipePreperList) => {
                    return (
                      <tr>
                        <th>{recipePreperList.index}</th>
                        <td>{recipePreperList.recipePreper}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="form-group text-right">
            <label for="FacultyAdress" className="form-label">
            DegreeOfDifficulty{" "}
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
              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
            </select>
          </div>
          <input
            type="number"
            className="form-control mt-2"
            id="personNum"
            placeholder=" Person numbers"
            value={personNum}
            onChange={(e) => {
              setPersonNum(e.target.value);
              console.log(e.target.value);
            }}
          />

          <div className="form-group text-right">
            <label for="studentId" className="form-label">
              {" "}
              Ratings{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              placeholder=" Ratings "
              readOnly
            />
          </div>
          <div className="form-group text-right">
            <label for="studentId" className="form-label">
              {" "}
               Time
            </label>
            <input
              type="text"
              className="form-control"
              id="time"
              placeholder=" Time  "
              value={recipePreperTime}
              onChange={(e) => {
                setRecipePreperTime(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-dark">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
