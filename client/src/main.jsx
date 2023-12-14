import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import Recipes from './components/pages/Recipes.jsx';
import Register from './components/pages/Register.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
         path: 'home',
        element: <Home />
      },{
        path: 'recipes',
        element: <Recipes />
      }, 
      {
        path: 'register',
       element: <Register />
     },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
