import React from 'react'
import { useNavigate, useParams } from 'react-router';

export default function OrderPage() {
  
  let navigate = useNavigate();
  let {name} = useParams()
  
  const handleSubmit = () => { 
    navigate("/login")
   }

  return (
    <div>
      <h2>Bonjour {name}</h2>
      <button onClick={handleSubmit}>Déconnexion</button>
    </div>
  )
}
