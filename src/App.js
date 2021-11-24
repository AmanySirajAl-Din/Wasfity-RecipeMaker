import './App.css'
import Home from './pages/site/home/home'
import Nav from './components/site/nav/nav'
import Profile from './pages/site/profile/profile'
import Footer from './components/site/footer/footer'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecipeDetails from './pages/site/recipeDetails/recipeDetails'
import { IntlProvider } from 'react-intl'
import langs from './assets/translation/langs'

function App() {
  const lang = useSelector((state) => state)
  console.log(lang)
  return (
    <div className='App'>
      <IntlProvider locale={lang} messages={langs[lang]}>
        <Router>
          <div // Handle Language
            className={lang === 'ar' ? 'rtl' : 'ltr'}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/:id' component={RecipeDetails} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </IntlProvider>
    </div>
  )
}

export default App
