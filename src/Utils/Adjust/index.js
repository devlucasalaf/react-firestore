import React, { useState } from 'react'
import firebase from '../../firebase'

const Adjust = ({ spell }) => {
  const [nome, setNome] = useState(spell.nome)
  const [titulo, setTitulo] = useState(spell.titulo)
  const [foto, setFoto] = useState(spell.foto)
  const [descricao, setDescricao] = useState(spell.descricao)

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('posts').doc(spell.id).set({
      nome: nome,
      titulo: titulo,
      foto: foto,
      descricao: descricao
    })
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('posts').doc(spell.id).delete()
  }

  return (
    <div className='postagens' key={spell.id}>
      <input onChange={e => { setNome(e.target.value) }} id='name' value={nome}></input>
      <input onChange={e => { setTitulo(e.target.value) }} id='titulo' value={titulo}></input>
      <textarea onChange={e => { setDescricao(e.target.value) }} value={descricao}></textarea>
      <input onChange={e => { setFoto(e.target.value) }} id='foto' value={foto}></input>
      <div id='buttonsDiv'>
        <button onClick={onUpdate} id='alterar'>AJUSTAR POST</button>
        <button onClick={onDelete} id='deletar'>DELETAR</button>
      </div>
    </div>
  )
}

export default Adjust