import React from 'react';
import Title from './components/Title';
import Produto from './components/Produto';

const App = () => {

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  const { pathname } = window.location;

  return (
    <>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/produtos'>Produtos</a></li>
      </ul>
      {pathname==="/produtos"?
        <>
          <Title title="Produtos" cor="green" />
          {
            produtos.map(({nome, propriedades})=>{
              return <Produto key={nome} nome={nome} propriedades={propriedades}/>
          })
        }
        </>
      :
        <>
          <Title title="Home" cor="green"/>
          <p>Essa é a home do site.</p>
        </>
      }
    </>
  )
};

export default App;
