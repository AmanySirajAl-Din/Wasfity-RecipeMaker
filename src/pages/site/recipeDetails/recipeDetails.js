import './recipeDetails.css'
import { data } from '../../../data/data'

function RecipeDetails(props) {
  // Get recipe id from route
  let recipeId = props.match.params.id

  // Find the recipe from data by id
  let recipeDetails = data.find(({ id }) => {
    return id === parseInt(recipeId)
  })
  return (
    <>
      <main className='recipeInfo__container'>
        <section className='recipeInfo'>
          <img
            src={recipeDetails.image}
            alt={recipeDetails.title}
            className='recipeInfo__img'
          />
          <div className='recipeInfo__content'>
            <h2 className='recipeInfo__title'>{recipeDetails.title}</h2>
            <p className='recipeInfo__data'>{recipeDetails.description}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default RecipeDetails
