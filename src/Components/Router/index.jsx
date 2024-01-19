import Category from '../../Pages/Category'
import Home from '../../Pages/Home'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/:category', element: <Category /> },
]

export default routes
