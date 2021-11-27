import './recipe.css'
import { Link } from 'react-router-dom'

const Recipe = ({
  // id,
  // image,
  // title,
  // time,
  // difficulty,
  // category
  DegreeOfDifficulty,
  categoryRecipeId,
  imagePath,
  recipeName,
  recipePreperTime,
  id,
}) => {
  return (
    <Link to={`/${id}`}>
      <section className='one-recipe'>
        <div className='one-recipe__img'>
          <img src={imagePath} alt='...' />
        </div>
        <div className='one-recipe__content'>
          <div className='one-recipe__heading'>
            <small className='one-recipe__category'>{categoryRecipeId}</small>
            <h4 className='one-recipe__title'>{recipeName}</h4>
          </div>
          <div className='one-recipe__data'>
            <p className='one-recipe__time'>
              <i class='bx bx-time-five'></i> {recipePreperTime}
            </p>
            <p className='one-recipe__difficulty'>
              {DegreeOfDifficulty.toUpperCase()}
            </p>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Recipe
