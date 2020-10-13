import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewPosts from './Pages/NewPosts'
import Posts from './Pages/Posts'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={NewPosts}></Route>
        <Route path='/posts' component={Posts}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes