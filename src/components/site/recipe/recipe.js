import './recipe.css'

const Recipe = ({ image, title, description }) => {
  return (
    <section className='one-recipe'>
      <img src={image} alt='...' className='one-recipe__img' />
      <h4 className='one-recipe__title'>{title}</h4>
      <p className='one-recipe__description'>{description}</p>
    </section>
  )
}

export default Recipe
