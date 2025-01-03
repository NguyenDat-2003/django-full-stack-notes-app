import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './Layout/MainLayout'

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
