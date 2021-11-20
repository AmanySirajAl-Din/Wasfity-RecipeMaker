import React from "react";
import "./Sidbar.css";
<<<<<<< HEAD
import logo from "../../../assets/img/logo.png";
import { DropdownButton, Accordion } from "react-bootstrap";
// import Category_of_recipes from "./../../../pages/admin/category_of_recipes/Category_of_recipes";
=======
import logo from "../../../assets/img/كومبو بيتي PROFILE PIC.psdye 1.png";
import { DropdownButton, Accordion } from "react-bootstrap";
import Category_of_recipes from "./../../../pages/admin/category_of_recipes/Category_of_recipes";
>>>>>>> 60f30efb2856184607216efcdb06be5bd1265fcf
import { Link } from "react-router-dom";

export default function Sidbar() {
  return (
    <div className="sidbar-container bg-light">
      <ul>
        <img src={logo} width="120px" />
        <hr />
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-speedometer2"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
            <path
              fill-rule="evenodd"
              d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
            />
          </svg>{" "}
          Dashboard
        </li>

        <Accordion>
          <li>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Recipes
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  <Link to="R">Recipes</Link>
                </li>
                <li>
                  <Link to="addRecipe">ADD recipe</Link>
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </li>
        </Accordion>

        <li>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Category_of_Recipes
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  <Link to="RC">Category</Link>
                </li>
                <li>
                  <Link to="addRecipeCat">Add Category</Link>
                </li>
                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </li>
        <li>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Category_of_ingredients

              </Accordion.Header>
              <Accordion.Body>
              <li>
                  <Link to="IC">Category</Link>
                </li>
                <li>
                  <Link to="addRecipeCat">Add Category</Link>
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </li>
        <li>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Ingredients
              </Accordion.Header>
              <Accordion.Body>
              <li>
                  <Link to="Ingredients">Ingredients</Link>
                </li>
                <li>
                  <Link to="AddIngredients">Add Ingredient</Link>
                </li>
              
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </li>
        <li>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Category_of_Recipes
              </Accordion.Header>
              <Accordion.Body>
                <li>Recipes</li>
                <li>Category_of_recipes</li>
                <li>ADD recipe</li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </li>
        <li>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>{" "}
                Category_of_Recipes
              </Accordion.Header>
              <Accordion.Body>
                <li>Recipes</li>
                <li>Category_of_recipes</li>
                <li>ADD recipe</li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}
