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

        addDoc(collection(db, "Ingredients"), {
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
          <div className="mt-3">
            <button className="ms-0" onClick={AddNewIngredient}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-patch-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
              </svg>
            </button>

            <Button variant="primary" onClick={() => setModalShow(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-patch-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
              </svg>
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div>
            <Buttonn onClick={addComponent} text={<svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-patch-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
              </svg>} />
             
            {components.map((item, i) => (
              <ListComponent text={item} />
            ))}
            
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
