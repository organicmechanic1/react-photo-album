import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Albums from './Albums'
import AlbumGrid from './AlbumGrid'
import PhotoView from './PhotoView'
import './App.css'

class App extends React.Component {


  render () {
    return (
      <Router>
        <div id="container">
          <Route exact={true} path="/" component={Albums} />
          <Route path="/album/:albumId" component={AlbumGrid} />
          <Route path="/photo/:photoId" component={PhotoView} />
        </div>
      </Router>
    )
  }
}

export default App