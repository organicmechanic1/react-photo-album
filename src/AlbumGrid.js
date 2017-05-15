import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

class AlbumGrid extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			name: data.gallery.filter(album=>{
				return Number(album.id) === Number(this.props.match.params.albumId)
			})[0].name,
			photos: data.photos.filter(photo=>{
				return Number(photo.albumid) === Number(this.props.match.params.albumId)
			})
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			name: data.gallery.filter(album=>{
				return Number(album.id) === Number(props.match.params.albumId)
			})[0].name,
			photos: data.photos.filter(photo=>{
				return Number(photo.albumid) === Number(props.match.params.albumId)
			})
		})
	}


	render () {
		return (
			<div className="albumPage">
				<div className="nav">
					{data.gallery.map(album=>(
						<Link key={'nav' + album.id} to={"/album/" + album.id}>
						{album.name}
						</Link>
						))}
				</div>
					<div>
					<h1 className="albumheading">{this.state.name}</h1>
					<div className="grid">
						{this.state.photos.map(photo=>(
							<div key={'photolink' + photo.id}>
								<Link to={"/photo/" + photo.id} >
								<img src={photo.url} alt={photo.name} />
								<span className="name">{photo.name}</span>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default AlbumGrid