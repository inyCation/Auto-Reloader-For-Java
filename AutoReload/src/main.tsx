import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

import './styles/main.scss'
import "./styles/mediaQuery.scss"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path:"About",
        element: <About />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
