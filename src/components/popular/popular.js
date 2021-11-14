import './popular.css';
import recipe1 from '../../assets/img/popular1.png';
import recipe2 from '../../assets/img/popular2.png';
import recipe3 from '../../assets/img/popular3.png';

const Popular = ()=>{
    return(
        <section className='popular'>
            <h2 className='popular__title'>Most Popular</h2>

            <div className='popular__slider'>
                <div className='slide'>
                    <div className='recipe'>
                        <img src={recipe1} className='recipe__img' alt='...' />
                        <h4 className='recipe__name'>Grilled chicken</h4>
                        <div className='recipe__number'>
                            <span>3</span>
                            <i className='bx bx-group'></i>
                        </div>
                    </div>

                    <div className='slide__btns'>
                        <button className='video-btn btn'>
                            Watch video
                            <i className='bx bx-play-circle'></i>
                        </button>
                        <button className='favorite-btn btn'>
                            Add to favorite
                            <i className='bx bx-heart' ></i>
                        </button>
                    </div>
                </div>

                <div className='slide'>
                    <div className='recipe'>
                        <img src={recipe2} className='recipe__img' alt='...' />
                        <h4 className='recipe__name'>Margherita Pizza</h4>
                        <div className='recipe__number'>
                            <span>2</span>
                            <i className='bx bx-group'></i>
                        </div>
                    </div>

                    <div className='slide__btns'>
                        <button className='video-btn btn'>
                            Watch video
                            <i className='bx bx-play-circle'></i>
                        </button>
                        <button className='favorite-btn btn'>
                            Add to favorite
                            <i className='bx bx-heart' ></i>
                        </button>
                    </div>
                </div>

                <div className='slide'>
                    <div className='recipe'>
                        <img src={recipe3} className='recipe__img' alt='...' />
                        <h4 className='recipe__name'>Grilled steak</h4>
                        <div className='recipe__number'>
                            <span>5</span>
                            <i className='bx bx-group'></i>
                        </div>
                    </div>

                    <div className='slide__btns'>
                        <button className='video-btn btn'>
                            Watch video
                            <i className='bx bx-play-circle'></i>
                        </button>
                        <button className='favorite-btn btn'>
                            Add to favorite
                            <i className='bx bx-heart' ></i>
                        </button>
                    </div>
                </div>

            </div>
                <div className='arrows'>
                    <i className='bx bx-left-arrow-alt'></i>
                    <i className='bx bx-right-arrow-alt' ></i>
                </div>
        </section>
    );
};

export default Popular;