import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://locahost:3000/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Chai aur Full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          <div key={index}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
