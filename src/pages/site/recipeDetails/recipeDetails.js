import './recipeDetails.css'
import { data } from '../../../data/data'

function RecipeDetails(props) {
  // Get recipe id from route
  let recipeId = props.match.params.id
  console.log(recipeId)

  // Find the recipe from data by id
  let recipeDetails = data.find(({ id }) => {
    return id === parseInt(recipeId)
  })
  console.log(recipeDetails)
  return (
    <>
      <main className='recipeInfo__container'>
        <section className='recipeInfo'>
          <div className='recipeInfo__content'>
            <h2 className='recipeInfo__title'>{recipeDetails.title}</h2>
            <div className='recipeInfo__data'>
              <small className='recipeInfo__reviews'>
                <i
                  class='bx bx-star'
                  style={{ color: 'rgb(248, 171, 21)' }}
                ></i>
                2reviews
              </small>
              <small className='recipeInfo__time'>
                <i class='bx bx-time-five'></i>
                {recipeDetails.time.slice(0, -1)}
              </small>
              <small className='recipeInfo__difficulty'>
                {recipeDetails.difficulty.toLocaleUpperCase()}
              </small>
            </div>
            <p className='recipeInfo__description'>
              A family favorite, this apple crumble was originally my
              grandmother Hazel's recipe which my mom made on a regular basis.
              She would make two at a time to take to sick or shut-in friends,
              or to potlucks. There is never any left. Serve warm with French
              vanilla yogurt.
            </p>
            <p>
              Category:
              <span className='recipeInfo__category'>
                {recipeDetails.category.toLocaleUpperCase()}
              </span>
            </p>
          </div>
          <div
            className='recipeInfoMain'
            style={{ display: 'flex', gap: '2rem' }}
          >
            <div className='recipeInfo__left'>
              <div className='recipeInfo__img'>
                <img src={recipeDetails.image} alt={recipeDetails.title} />
              </div>
              <div className='recipeInfo__btns'>
                <button className='btn__watch btn' title='watch video'>
                  <i class='bx bx-play'></i>
                  {/* Watch Video */}
                </button>
                <button className='btn__save btn' title='add to favorite'>
                  <i class='bx bx-heart'></i>
                  {/* Save */}
                </button>
                <button
                  className='btn__share btn'
                  title='share on social media'
                >
                  <i class='bx bxs-share-alt'></i>
                  {/* Share */}
                </button>
                <button className='btn__print btn' title='print'>
                  <i class='bx bx-printer'></i>
                  {/* Print */}
                </button>
              </div>
            </div>
            <div className='recipeInfo__right'>
              <div className='ingredients'>
                <h3 className='ingredients__title'>Ingredients</h3>
                <ol className='ingredients__list'>
                  <li>Lorem, ipsum.</li>
                  <li>lorem</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum.</li>
                </ol>
              </div>
              <div className='directions'>
                <h3 className='directions__title'>Directions</h3>
                <ul style={{ listStyle: 'initial !important' }}>
                  <li>
                    - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, quos.
                  </li>
                  <li>
                    - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores omnis quas nulla nam.
                  </li>
                  <li>
                    - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum?
                  </li>
                  <li>
                    - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda enim veritatis labore atque est molestias
                    consequuntur suscipit quidem provident eius?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default RecipeDetails
