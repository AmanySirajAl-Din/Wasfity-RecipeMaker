import Header from '../../components/header/header';
import Search from '../../components/search/search';
import './home.css';
import img1 from '../../assets/img/home1.png';
import img2 from '../../assets/img/home3.png';
import img3 from '../../assets/img/home2.png';
import Popular from '../../components/popular/popular';

const Home = ()=>{
    return(
        <main className='main'>
            <Header />
            <section className='hero'>
                <h1 className='hero__title'><span>Let’s Eat</span><br/>Quality Food</h1>
                <Search />
                <div className='hero__imgs' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <img src={img1} className='hero__img' alt='...' />
                    <img src={img2} className='hero__img' alt='...' />
                    <img src={img3} className='hero__img' alt='...' />
                </div>
            </section>
            <Popular />
        </main>
    );
};

export default Home;