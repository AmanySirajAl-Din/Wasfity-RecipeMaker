import './recipe.css'
import { Link } from 'react-router-dom'

const Recipe = ({ id, image, title, description }) => {
  return (
    <Link to={`/${id}`}>
      <section className='one-recipe'>
        <img src={image} alt='...' className='one-recipe__img' />
        <h4 className='one-recipe__title'>{title}</h4>
        <p className='one-recipe__description'>{description}</p>
      </section>
    </Link>
  )
}

export default Recipe
