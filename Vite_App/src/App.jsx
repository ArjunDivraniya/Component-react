import Navbar from "./Components/Navbar.jsx"
import Meel from "./Components/Meel.jsx"
import Potter from "./Components/Potter.jsx"
import Indianbank from "./Components/Indianbank.jsx"
import Coketail from "./Components/Coketail.jsx"
import Cocktailinfo from "./Components/Cocktailinfo.jsx"

import Kaipan from "./Components/kaipan.jsx"

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Mealinfo from "./Components/Mealinfo.jsx"
import Potterinfo from "./Components/Potterinfo.jsx"
function App() {
  const router=createBrowserRouter([
{path:"/",element:<><Navbar/></>},
{path:"/meal",element:<><Navbar/><Meel/></>},
{path:"/potter",element:<><Navbar/><Potter/></>},
{path:"/indianbank",element:<><Navbar/><Indianbank/></>},
{path:"/coketail",element:<><Navbar/><Coketail/></>},
{path:"/:idMeal", element:<><Navbar/><Mealinfo/></>},
{path:"/:idDrink",element:<><Navbar/><Cocktailinfo/></>},
{path:"/:number",element:<><Navbar/><Potterinfo/></>}

])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
