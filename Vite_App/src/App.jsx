import Navbar from "./Components/Navbar.jsx"
import Meel from "./Components/Meel.jsx"
import Potter from "./Components/Potter.jsx"
import Indianbank from "./Components/Indianbank.jsx"
import Coketail from "./Components/Coketail.jsx"
import Kaipan from "./Components/kaipan.jsx"

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
function App() {
  const router=createBrowserRouter([
{path:"/",element:<><Navbar/></>},
{path:"/meal",element:<><Navbar/><Meel/></>},
{path:"/potter",element:<><Navbar/><Potter/></>},
{path:"/indianbank",element:<><Navbar/><Indianbank/></>},
{path:"/coketail",element:<><Navbar/><Coketail/></>},

])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
