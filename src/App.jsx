import { useEffect, useState } from 'react'
import { Router,Route, Routes } from 'react'
import './App.css'

function App() {
 
  useEffect(() => {
    fetch(`${API}/workouts`)
    .then((res) => {
      return res.json()
    })
    .then(resJSON => console.log(resJSON))
  }, [])

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/workouts' element={<Index/>} />
            <Route path='/workouts/:id' element={<Show/>} />
            <Route path='/workouts/:id/edit' element={<Edit/>} />
            <Route path='workouts/new' element={<New/>} />
            <Route path='*' element={<FourOFour/>} />
          </Routes>
        </main>
      </Router>
    </div>
  


  )
}

export default App
