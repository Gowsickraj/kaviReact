import React from 'react';
import './App.css';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './componets/home/Home';
import Product from './componets/product/Product';
import About from './componets/about/About';
import Signup from './componets/signup/Signup';
import Nav from './componets/navbar/Nav';




function App() {
  const Router = createBrowserRouter ([
    {
      path : "/",
      element : <Nav/>,
      children :[{
        
          path:"/home",
          element : <Home/>
        },
        {
          path : "/Product",
          element : <Product/>
        },
        {
          path : "/About",
          element : <About/>
        },
        {
          path : "/Signup",
          element : <Signup/>
        }]
      }
    
  ])
  return (
    <React.Fragment>
      <RouterProvider router={Router} />
    </React.Fragment>
  );
}

export default App;
