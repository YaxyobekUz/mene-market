import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';
import AdminRoot from './layouts/AdminRoot';

// pages 
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import PublicOffer from './pages/PublicOffer';
import Login from './pages/Login';
import Register from './pages/Register';
import Category from './pages/Category';
import Dashboard from './pages/Dashboard';
import Requests from './pages/Requests';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />} >
        <Route index element={<Home />} />

        <Route path='/products' element={<Products />} />

        <Route path='/product/:productName' element={<ProductDetail />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/public-offer' element={<PublicOffer />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/category/:categoryName' element={<Category />} />

        <Route path='/admin' element={<AdminRoot />} >

          <Route index element={<Dashboard />} />

          <Route path='requests' element={<Requests />} />
          
        </Route>
      </Route>
    )
  )
  return (

    <RouterProvider router={router} />
  )
}

export default App;