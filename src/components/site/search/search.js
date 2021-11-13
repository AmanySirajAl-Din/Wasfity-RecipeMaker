import './search.css'
import category1 from '../../../assets/img/category1.webp'
import category2 from '../../../assets/img/category2.jfif'
import category3 from '../../../assets/img/category3.jfif'
import category4 from '../../../assets/img/category4.jfif'
import category5 from '../../../assets/img/category5.jfif'
import category6 from '../../../assets/img/category6.jfif'
import category7 from '../../../assets/img/category7.jfif'
import category8 from '../../../assets/img/category8.jfif'
import category9 from '../../../assets/img/category9.jfif'

const Search = () => {
  return (
    <div className='search-container'>
      <section className='search'>
        <div className='search__bar'>
          <label className='search__label'>
            <input className='search__input' placeholder='Find a Recipe' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search search__icon'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </label>
          <h4 className='search__title'>search by ingredient</h4>
        </div>
        <div className='categories'>
          <div className='categorie'>
            <img src={category1} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category2} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category3} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category4} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category5} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category6} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category7} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category8} alt='...' />
            <p>Desert</p>
          </div>
          <div className='categorie'>
            <img src={category9} alt='...' />
            <p>Desert</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search
