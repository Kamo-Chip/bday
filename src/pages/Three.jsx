import React from 'react'
import { useNavigate } from 'react-router-dom'

const Three = () => {
    const navigate = useNavigate();
  return (
    <div className='three'>
        <h1>"What's up with the peaches?"</h1>
        <button  onClick={() => navigate("/four")}>Find out</button>
    </div>
  )
}

export default Three