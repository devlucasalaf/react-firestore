import React from 'react'
import './styless.css'

const Nav = () => {

  console.log(window.location.href)
  return (
    <div id='containerNav'>
      <div id='navBar'>
        <img src='./logotipoTransparente.png' alt='LOGOTIPO'></img>
        <a className={window.location.href === 'http://localhost:3000/' ? 'active' : 'inactive'} href='/'>Publicar Postagem</a>
        <a className={window.location.href === 'http://localhost:3000/posts' ? 'active' : 'inactive'} href='/posts'>Editar Postagens</a>
      </div>
    </div>
  )
}

export default Nav