import './search.css';

const Search = ()=>{
    return (
        <div className='search-bar'>
            <label htmlFor='search' className='search-label'>
                <input 
                    id='search'
                    type='search'
                    className='search-input'
                    placeholder='Search for recipe'
                />
                <i className='bx bx-search-alt-2 search-icon'></i>
            </label>
        </div>
    );
};

export default Search;