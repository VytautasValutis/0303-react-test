//
// Sis kodas naudoja Bootstrap ir Axios bibliotekas,
// kadangi mokymo kursas remesi siu biblioteku
// teikiamai mechanizmais. Smulkiau - pas
// gerb. A.Kijakauska
//

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => {
        console.log(res.data);
        setData(res.data.jokes);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Joke List</h1>
        <ul>
          {
            data?.map(u => <li key={u.id}><p>{u.setup + " "}</p>
              <small>{u.delivery}</small>
            </li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
