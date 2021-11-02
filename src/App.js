import logo from './logo.svg';
import './App.css';
import Footer  from './components/admin/footer/Footer';
import  NavbarSection  from './components/admin/Navbar/Navbar';

import { initializeApp } from "firebase/app"
import Sidbar from './components/admin/sidbar/Sidbar'

import {useEffect} from 'react'
import{db} from './firebase'
import { collection, getDocs,onSnapshot } from'firebase/firestore'

function App() {
  useEffect(() => {
    onSnapshot(collection(db,'recipes'),(snapshot)=>
    console.log(snapshot.docs.map(doc=>doc.data())));
   
  });

  return (
    <div className="App">
      {/* <NavbarSection/> */}
      <Sidbar/>
     <Footer/>
    </div>
  );
}

export default App;
