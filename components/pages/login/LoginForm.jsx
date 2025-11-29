import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function LoginForm() {
  let navigate = useNavigate();
  // state
    const [inputValue, setInputValue] = useState('');
  
    // comportement
    const handleSubmit = event => {
      event.preventDefault();
      //alert(`Bonjour ${inputValue}`)
      navigate("/commande")
      setInputValue("")
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </form>
  )
}
