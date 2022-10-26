import React from 'react';
import {BrowserRouter /*, Routes, Route, Navigate*/} from 'react-router-dom'
// import Home from './components/home/Home';
// import Contact from './components/contact/Contact';
import SharedLayout from './components/sharedLayout/SharedLayout';
// import About from './components/about/About';
// import Reviews from './components/reviews/Reviews';


function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='contact' element={<Contact />} />

          <Route path='*' element={<Navigate to="/home" />}/>
         
        </Route>
        
          
      </Routes> */}
      <SharedLayout />
    </BrowserRouter>
  );
}

export default App;
