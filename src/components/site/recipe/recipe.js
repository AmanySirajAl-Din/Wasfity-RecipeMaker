import './recipe.css'
import { Link } from 'react-router-dom'

const Recipe = ({
  id,
  image,
  title,
  description,
  time,
  difficulty,
  category,
}) => {
  return (
    <Link to={`/${id}`}>
      <section className='one-recipe'>
        <div className='one-recipe__img'>
          <img src={image} alt='...' />
        </div>
        <div className='one-recipe__content'>
          <div className='one-recipe__heading'>
            <small className='one-recipe__category'>{category}</small>
            <h4 className='one-recipe__title'>{title}</h4>
          </div>
          <div className='one-recipe__data'>
            <p className='one-recipe__time'>
              <i class='bx bx-time-five'></i> {time}
            </p>
            <p className='one-recipe__difficulty'>{difficulty.toUpperCase()}</p>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Recipe
