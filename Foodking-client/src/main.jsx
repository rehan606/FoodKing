import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Register from './pages/authentication/Register.jsx';
import AuthLayout from './pages/authentication/AuthLayout.jsx';
import Login from './pages/authentication/Login.jsx';
import ErrorPage from './pages/common/ErrorPage.jsx';
import AddFood from './pages/foodPages/AddFood.jsx';
import AllFoods from './pages/foodPages/AllFoods.jsx';
import MyPostedFood from './pages/foodPages/MyPostedFood.jsx';
import UpdateFood from './pages/foodPages/UpdateFood.jsx';
import FoodDetails from './pages/foodPages/FoodDetails.jsx';
import Cart from './pages/foodPages/Cart.jsx';
import FoodGallery from './pages/foodPages/FoodGallery.jsx';

// TanStack Query 
import { QueryClient,QueryClientProvider, useQuery, } from '@tanstack/react-query'
import PrivetRoute from './router/PrivetRoute.jsx';
import Contact from './pages/common/Contact.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
      {
        path: '/auth/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoute> <Dashboard></Dashboard> </PrivetRoute> ,
    children: [
      {
        path: 'addFood',
        element: <PrivetRoute> <AddFood></AddFood> </PrivetRoute> ,
    
      },
    ]
  },
  {
    path: 'addFood',
    element: <PrivetRoute> <AddFood></AddFood> </PrivetRoute> ,
  },
  {
    path: 'allFoods',
    element: <AllFoods></AllFoods>,
  },
  {
    path: 'myFoods',
    element: <PrivetRoute> <MyPostedFood></MyPostedFood> </PrivetRoute> 
  },
  {
    path: 'update/:id',
    element: <UpdateFood></UpdateFood>
  },
  {
    path: 'foodDetail/:id',
    element: <FoodDetails></FoodDetails>,
  },
  {
    path: 'my-order',
    element: <PrivetRoute> <Cart></Cart> </PrivetRoute> ,
  },
  {
    path: 'gallery',
    element: <FoodGallery></FoodGallery>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
  )
