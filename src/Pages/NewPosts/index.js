import React, { useState } from 'react'
import './styless.css'
import firebase from '../../firebase'

const NewPosts = () => {

  const [newNome, setNewNome] = useState()
  const [newTit, setNewTit] = useState()
  const [newDesc, setNewDesc] = useState()
  const [newFoto, setNewFoto] = useState()

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('posts').add({
      nome: newNome,
      titulo: newTit,
      descricao: newDesc,
      foto: newFoto
    })
  }

  return (
    <div id='containerNewPosts'>
      <div className='postagens'>
        <input onChange={e => { setNewNome(e.target.value) }} id='name' value={newNome} placeholder='Digite aqui o nome da postagem'></input>
        <input onChange={e => { setNewTit(e.target.value) }} id='titulo' value={newTit} placeholder='Digite aqui o título da postagem'></input>
        <textarea onChange={e => { setNewDesc(e.target.value) }} value={newDesc} placeholder='Digite aqui a descrição da postagem'></textarea>
        <input onChange={e => { setNewFoto(e.target.value) }} id='foto' value={newFoto} placeholder='Digite aqui o link da foto da postagem'></input>
        <div id='publicarDiv'>
          <button onClick={onCreate} id='publicar'>PUBLICAR POST</button>
        </div>
      </div>
    </div>
  )
}

export default NewPosts