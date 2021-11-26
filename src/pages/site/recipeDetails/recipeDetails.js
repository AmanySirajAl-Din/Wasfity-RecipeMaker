import { useModal } from 'react-hooks-use-modal'
import { useState } from 'react'
import { data } from '../../../data/data'
import './recipeDetails.css'

function RecipeDetails(props) {
  // Get recipe id from route
  let recipeId = props.match.params.id
  // console.log(recipeId)

  // Find the recipe from data by id
  let recipeDetails = data.find(({ id }) => {
    return id === parseInt(recipeId)
  })

  // Modal
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: true,
  })

  const [reviewMsg, setReviewMsg] = useState('')
  const [reviewImg, setReviewImg] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(reviewMsg)
    console.log(reviewImg)
    setReviewMsg('')
    setReviewImg(
      'https:////via.placeholder.com//400.png?text=tap+to+add+another+photo'
    )
  }

  // console.log(recipeDetails) // return selected recipe
  return (
    <>
      <main className='recipeInfo__container'>
        <section className='recipeInfo'>
          <div className='recipeInfo__content'>
            {/* ------------------ Recipe Title  */}
            <h2 className='recipeInfo__title'>{recipeDetails.title}</h2>
            <div className='recipeInfo__data'>
              {/* --------------------- Recipe Data  */}
              <small className='recipeInfo__reviews'>
                <a href='#reviews' className='recipeInfo__numReview'>
                  <span className='recipeInfo__category'>
                    <i
                      class='bx bx-star'
                      style={{ color: 'rgb(248, 171, 21)' }}
                    ></i>{' '}
                    (2) reviews {/* Number of reviews */}
                  </span>
                </a>
              </small>
              <small className='recipeInfo__time'>
                Duration:
                <span className='recipeInfo__category'>
                  <i class='bx bx-time-five'></i>{' '}
                  {recipeDetails.time.slice(0, -1)}
                </span>
              </small>
              <small className='recipeInfo__difficulty'>
                Difficulty:{' '}
                <span className='recipeInfo__category'>
                  {recipeDetails.difficulty.toLocaleUpperCase()}
                </span>
              </small>
            </div>
            {/* ----------------------- Recipe Description  */}
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
            {/* -------------------------- Left Side of Page  */}
            <div className='recipeInfo__left'>
              {/* ---------------------------- Recipe Img  */}
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
            {/* -------------------------- Right Side of Page  */}
            <div className='recipeInfo__right'>
              {/* ------------------------ Ingredients  */}
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
              {/* --------------------------- Directions  */}
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
          {/* -------------------------- Reviews  */}
          <div className='reviews' id='reviews'>
            <h3 className='reviews__title'>Reviews (5)</h3>
            {/* Number of Reviews */}
            <div className='reviews__box'>
              <div className='reviews__box__btn'>
                <button onClick={open}>Add Rating Review</button>
              </div>
              {/* ------------------------- Review Modal  */}
              <Modal className='review__modal'>
                <div>
                  <div className='modal__header'>
                    <p className='modal__text'>
                      <i class='bx bx-star'></i> Review This Recipe
                    </p>
                    <button className='modal__close__btn btn' onClick={close}>
                      <i class='bx bx-x'></i>
                    </button>
                  </div>
                  <form className='modal__body' onSubmit={handleSubmit}>
                    <h4 className='modal__title'>{recipeDetails.title}</h4>
                    <div className='modal__content'>
                      <textarea
                        type='text'
                        required
                        value={reviewMsg}
                        onChange={(e) => setReviewMsg(e.target.value)}
                        placeholder='What did you think about the recipe'
                        className='modal__input__message'
                      />
                      <label htmlFor='modal-img' className='modal__label__img'>
                        <i class='bx bxs-camera'></i>
                        <input
                          id='modal-img'
                          type='file'
                          className='modal__input__img'
                          alt='Add Pic'
                          // value={reviewImg}
                          onChange={(e) => {
                            setReviewImg(URL.createObjectURL(e.target.files[0]))
                            setIsFilePicked(true)
                          }}
                        />
                        {isFilePicked && (
                          <div>
                            <img
                              src={reviewImg && reviewImg}
                              alt=''
                              className='modal__user__img'
                            />
                          </div>
                        )}
                        Add Photo
                      </label>
                    </div>
                    <button type='submit' className='modal__submit__btn'>
                      Submit
                    </button>
                  </form>
                </div>
              </Modal>
              <div className='reviews__box__section'>
                <div className='review'>
                  <h5 className='reviewer__name'>John Doe</h5>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className='review__message'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur rerum quisquam nulla, unde rem ab.
                  </p>
                </div>
                <div className='review'>
                  <h5 className='reviewer__name'>John Doe</h5>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className='review__message'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur rerum quisquam nulla, unde rem ab.
                  </p>
                </div>
                <div className='review'>
                  <h5 className='reviewer__name'>John Doe</h5>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p className='review__message'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur rerum quisquam nulla, unde rem ab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default RecipeDetails
