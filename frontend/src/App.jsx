import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './Layout/MainLayout'
import { AddNotes } from './pages/AddNotes'
import { NoteDetailPage } from './pages/NoteDetailPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const App = () => {
  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get('http://127.0.0.1:8000/notes')
        setNotes(res.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log(notes)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage notes={notes} loading={isLoading} />} />
        <Route path='/add-notes' element={<AddNotes />} />
        <Route path='/notes/:slug' element={<NoteDetailPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
