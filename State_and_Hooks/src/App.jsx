import React from 'react'
import { useState } from 'react'  //useState is a hook that allows you to have state variables in functional components
import './App.css'

/**This is a React functional component named Card. It takes three props:  */
const Card = ({ title, rating, isCool }) => {
  const [hasLiked, setHasLiked] = useState()//useState is a hook that allows you to have state variables in functional components
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? 'Liked' : 'Like'}</button>

    </div>
  )
}
const App = () => {
  return (
    <div className="card-container">
      <Card title="Avangers" rating={5} isCool={true} />
      <Card title="Harry Potter" rating={4} isCool={true} />
      <Card title="The Dark Knight" rating={5} isCool={true} />
    </div>
  )
}
export default App