import React from 'react'

function Produto({dados}) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      {dados.fotos.map((image)=>{
        return <div> <img src={image.src} alt={image.titulo} /> </ div>
      })}
    </div>
  )
}

export default Produto;
