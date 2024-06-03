import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Root from './Components/Root';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import PopularMovies from './Pages/PopularMovies';
import SearchTitles from './Pages/SearchTitles';
import PopularTV from './Pages/PopularTV';
import MoreFeatures from './Pages/MoreFeatures';
function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Root/>,children:[
      {path:'/',element:<HomePage/>},
      {path:'/search',element:<SearchTitles/>,children:[
        {path:'?title=:title'}
      ]},
      {path:'/popular-movies',element:<PopularMovies/>},
      {path:'/popular-tv-shows',element:<PopularTV/>},
      {path:'/about',element:<About/>},
      {path:'/more',element:<MoreFeatures/>}
    ]}
  ])
  return <RouterProvider router ={router}/>
}

export default App;
