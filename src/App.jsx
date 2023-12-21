import logo from './logo.svg';
import './App.css';
import { First } from './pegas/first';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Second } from './pegas/second';
import { Third } from './pegas/third';
import { Fourth } from './pegas/fourth';
import { Fifth } from './pegas/fifth';


function App() {

  const routerConfig = createBrowserRouter (
    [
      {
        path:"/",
        element:<First />,
      },
      {
        path:"/second",
        element:<Second />,
      },
      {
        path:"/third",
        element:<Third />,
      },
      {
        path:"/fourth",
        element:<Fourth />,
      },
      {
        path:"/fifth",
        element:<Fifth />,
      }
    ]
    
  )

  return (
    <div className='App'>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
