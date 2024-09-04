import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';

function App() {
  // let router = createBrowserRouter([
  //   {
  //     path: '',
  //     element: <Home />,
  //     children: [
  //       {
  //         path: '/home',
  //         element:<Home/>
  //       },
  //       {
  //         path: '/productlist',
  //         element: <ProductList/>
  //       },
  //       {
  //         path: '/product',
  //         element: <Product />,
  //       }
  //     ]
  //   },
  // ]);

  return (

    <div className='app-div'>
      <RouterProvider router={router}/>
      <div style={{minHeight:'40vh'}}>
        <Outlet/>
      </div> 
    </div>
    
  );
}

export default App;
