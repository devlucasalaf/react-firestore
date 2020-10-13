import React, { useEffect, useState } from 'react';
import firebase from '../../firebase'
import './styless.css'
import Adjust from '../../Utils/Adjust'

const Posts = () => {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('posts').get()
      setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  return (
    <div id='containerPosts'>
      {spells.map(spell => {
        return (
          <div>
            <Adjust spell={spell} />
          </div>
        )
      })}
    </div>
  )
}

export default Posts;