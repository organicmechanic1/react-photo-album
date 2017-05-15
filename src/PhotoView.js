import React from 'react'
import data from './data.json'

class PhotoView extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			photo: data.photos.filter(photo=>{
				return Number(photo.id) === Number(this.props.match.params.photoId)
			})[0]
		}
	}

	goback = (e) => {
		e.preventDefault()
		this.props.history.goBack()
	}

	render () {
		return (
			<div className="photoView">
				<button onClick={this.goback}>Go Back</button>
				<h1 className="photoHeader">{this.state.photo.name}</h1>
				<img src={this.state.photo.url} alt={this.state.photo.name} />
				<span className="photoTitle">{this.state.photo.name}</span>
			</div>
		)
	}
}

export default PhotoView