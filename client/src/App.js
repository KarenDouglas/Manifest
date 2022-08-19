import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



//pages & components
import Home from './pages/Home';
import Navigate from './components/Navigate';
import AddBlog from './pages/AddBlog';
import BlogPost from './pages/BlogPost';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigate/>
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
               <Route
              path="/blog/:id"
              element= {<BlogPost/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
