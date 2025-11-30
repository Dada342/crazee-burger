import { useNavigate, useParams } from 'react-router';

export default function OrderPage() {
  
  let navigate = useNavigate();
  let {username} = useParams()

  const handleSubmit = () => { 
    navigate("/")
   }

  return (
    <div>
      <h2>Bonjour {username}</h2>
      <button onClick={handleSubmit}>Déconnexion</button>
    </div>
  )
}
