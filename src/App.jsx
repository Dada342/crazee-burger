import { useState } from 'react';

function App() {
  //state (état, données)
  const [prenom, setPrenom] = useState('David');
  const [count, setCount] = useState(1);

  // comportement
  const handleClick = () => {
    //alert('handleClick');
    setCount(count + 1)
  }

  // Affichage (render)
  return (
    <div>
      <h1>Bonjour {prenom}</h1>
      <p>{count}</p>
      <button onClick={handleClick} >Incrémenter</button>
    </div>
  );
}

export default App;
