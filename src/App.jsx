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
        setData(res.data.jokes.map((u, i) => ({ ...u, row: i })));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Joke List</h1>
        <ul className="list-group">
          {
            data?.map(u => u.type === "single" ?
            <li className="list-group-item"
            style={{backgroundColor: u.row % 2 === 0 ? "gray" : "darkgray"}} 
            key={u.id}>
            <p>{u.joke}</p>
            </li> 
            :
            <li className="list-group-item"
            style={{backgroundColor: u.row % 2 === 0 ? "gray" : "darkgray"}}
            key={u.id}><p>{u.setup}</p>
              <p>{u.delivery}</p>
            </li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
