import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';

// pages 
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/product-name' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;