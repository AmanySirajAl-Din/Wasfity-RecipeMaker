// import Nav from '../../../components/site/nav/nav'
import './profile.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

function Profile() {
  return (
    // <section className='profile'>
    //   <div className='profile__tabs'>
    //     <div className='profile__tab'>
    //       <input
    //         type='radio'
    //         id='shoppingList'
    //         name='profile'
    //         className='profile__input'
    //       />
    //       <label className='profile__label' for='shoppingList'>
    //         Shopping List
    //       </label>
    //       <div className='profile__content'>
    //         <h3>Your Shopping List</h3>
    //         <p>that is shpping list tap</p>
    //       </div>
    //     </div>
    //     <div className='profile__tab'>
    //       <input
    //         type='radio'
    //         id='emailPrefrences'
    //         name='profile'
    //         className='profile__input'
    //       />
    //       <label className='profile__label' for='emailPrefrences'>
    //         Email Prefrences
    //       </label>
    //       <div className='profile__content'>
    //         <h3>Your Email Prefrences</h3>
    //         <p>that is email tap</p>
    //       </div>
    //     </div>
    //     <div className='profile__tab'>
    //       <input
    //         type='radio'
    //         id='mySettings'
    //         name='profile'
    //         className='profile__input'
    //       />
    //       <label className='profile__label' for='mySettings'>
    //         My Settings
    //       </label>
    //       <div className='profile__content'>
    //         <h3>Your My Settings</h3>
    //         <p>that is my Settings tap</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className='profile'>
      <div className='profile__tabs'>
        <Tabs>
          <TabList>
            <Tab>Shopping List</Tab>
            <Tab>Favorite Recipes</Tab>
            <Tab>My settings</Tab>
          </TabList>

          <TabPanel>
            <h2>shopping list content</h2>
            <p>User shopping list goes here</p>
            <ul>
              <li>ingredient 1</li>
              <li>ingredient 2</li>
              <li>ingredient 3</li>
              <li>ingredient 4</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Favotite Recipes content</h2>
            <p>User Favorite Recipes goes here</p>
          </TabPanel>
          <TabPanel>
            <h2>My settings content</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default Profile
