import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

class Albums extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			albums: data.gallery 
		}
	}

	render () {
		return (
			<div>
				<h1 className="mainheading">My Albums</h1>
				<div className="grid">
					{this.state.albums.map(album=>(
						<div key={'album' + album.id}>
							<Link to={"/album/" + album.id} >
							<img src={album.coverphoto} alt={album.name} />
							<span className="name">{album.name}</span>
							</Link>
						</div>
						))}
					</div>
			</div>
		)
	}
}

export default Albums