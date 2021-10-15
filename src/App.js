import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Crie uma página que tenha uma lista de Cards com paginação em React, suba no Github e coloque o link do seu código no campo de resposta abaixo:

const cards = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19},
  {id: 20},
]

function App() {

  const [page, setPage] = useState(1);
  const [listCard, setListCard] = useState(cards.slice(0,3));
  const quantity = 2;
  const pages = Math.ceil(cards.length/quantity);
  
  function NextPage() {
    page < pages 
    ? setPage(page + 1) 
    : setPage(page);
  }

  function BackPage() {
    page > 1  ? setPage(page - 1) : setPage(page);
  }

  useEffect(() => {
    setListCard(cards.slice(((page-1)*quantity),page*quantity))
  },[page])

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ul style={{display: 'flex', flexWrap: 'wrap', gap: '10px', padding: 0}}>
          {listCard.map(card => {
              return (
                <li style={{listStyle: 'none', height: '100px', width: '100px', backgroundColor: 'pink'}}>
                  <span>{card.id}</span>
                </li>
              )
          })}
        </ul>
        <div>
        <button onClick={BackPage}>{"<"}</button>
        <span>{page}/{pages}</span>
        <button onClick={NextPage}>{">"}</button>
      </div>
      </div>
    </div>
  );
}

export default App;
