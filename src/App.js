
import './App.css';
import { useState, useEffect } from 'react';
import CptButton from './components/CptButton'

function App() {
  const [compteur, setCompteur] = useState(null)

  useEffect(() => {
      if(compteur === null){
          // je simule l'appel api avec setTimeout
          setTimeout(()=>{
              setCompteur(Math.floor(Math.random() * 100))
          }, 2000)
      }
  }, [])

  return ( compteur !== null ? (
    <div className="App">
        <CptButton action='-' content={compteur - 1} set={setCompteur}/>
        {compteur}
        <CptButton action="+" content={compteur + 1} set={setCompteur} />
    </div> ) : (
        <div>Chargement</div>
      )
  );
}

export default App;
