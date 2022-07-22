import React from 'react';
import { useNavigate } from 'react-router-dom';

const Two = () => {
    const navigate = useNavigate();
  return (
    <div className='two'>
        <h1>I hope you like the Comic Sans :{")"}</h1>
        <button onClick={() => navigate("/three")}>Click</button>
    </div>
  )
}

export default Two