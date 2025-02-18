import React, { useEffect } from 'react'
import { useState } from 'react'  //useState is a hook that allows you to have state variables in functional components
import './App.css'

/**This is a React functional component named Card. It takes three props:  */

const Card = ({ title, rating, isCool }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)//useState is a hook that allows you to have state variables in functional components

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked])
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br/> {count} </h2>
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