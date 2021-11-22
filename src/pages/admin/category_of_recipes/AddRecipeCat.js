import React from "react";
import { db } from "../../../firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Buttonn } from "../../../components/admin/FormIngredients/Buttonn";
import { ListComponent } from "../../../components/admin/FormIngredients/ListComponent";

function MyVerticallyCenteredModal(props) {
  
  const [Ingredients,setIngredients]=useState("")
  const [Category_of_recipes,setRecipeCat]=useState([])


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function AddRecipeCat(props) {
  const [recipeCatName, setRecipeCatName] = useState("");
  const [quant, setQuant] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [ingredForm, setIngredForm] = useState([]);
  const [components, setComponents] = useState(["First Ingredient"]); 
  const [componentNames, setComponentNames] = useState([  'second gredient', 'Third Ingredient', 'Fourth Ingredient', 'Saturn', 'Uranus', 'Neptune' ]); 
  


  function addComponent(e) { 
    
    e.preventDefault();
    // setComponents([...components, "Sample Component"]) 
    if (componentNames.length > 0) { 
      
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
      
    } else { 
      
      window.alert("No more planets to add!");
      
    } 
    
    
  } 

  function AddNewIngredient(e) {
    e.preventDefault();
  }

  const AddRecpCatHandel = (e) => {
    e.preventDefault();

    addDoc(collection(db, "Category_of_recipes"), {
      Name: recipeCatName,
    })
      .then((data) => {
        console.log(data.id);

        addDoc(collection(db, "Ingredients_of_recipe"), {
          quant: quant,
        })
          .then(() => {
            alert("Recipe Added successefuly 👍");
            return history.push("/RC");
          })
          .catch((error) => {
            alert(error.message);
          });
        alert("Recipe Added successefuly 👍");
        return history.push("/RC");
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
          <div className="form-group text-right">
            <label for="recipeName" className="form-label ">
              {" "}
              اسم القسم
            </label>
            <input
              type="number"
              className="form-control"
              id="quanttity"
              value={quant}
              onChange={(e) => setQuant(e.target.value)}
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
