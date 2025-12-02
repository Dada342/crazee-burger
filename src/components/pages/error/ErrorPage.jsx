import { useNavigate } from 'react-router';

export default function ErrorPage() {
  let navigate = useNavigate() 

  const handleSubmit = () => { 
    navigate("/")
   }

  return (
    <div>
      <h2>ErrorPage</h2>
      <button onClick={handleSubmit}>Retourner vers la page d'acceuil</button>
    </div>
  )
}
