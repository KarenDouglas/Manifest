import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddBlog from './pages/AddBlog';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
              <Route
              path="/"
              element= {<Home/>}
              />
               <Route
              path="/add-blog"
              element= {<AddBlog/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
