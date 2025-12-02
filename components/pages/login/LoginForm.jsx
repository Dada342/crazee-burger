import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import styled from "styled-components"

export default function LoginForm() {
  
  // state
  const [inputValue, setInputValue] = useState('');
  let navigate = useNavigate();
  
    // comportement
    const handleSubmit = event => {
      event.preventDefault();
      navigate(`order/${inputValue}`);
      setInputValue("")
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    // affichage (render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit} >
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accédez à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  
`;