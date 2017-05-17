import React, { Component } from 'react'

class CreateComment extends Component{

	constructor(){
		super()
		this.state = {
			comment: {
				username: '',
				body: ''
			}
		}
	}

	updateComment(e){
		console.log('updateComment: '+ e.target.id+' '+e.target.value)
		let updateComment = Object.assign({}, this.state.comment)
		updateComment[e.target.id] = e.target.value
		this.setState({
			comment: updateComment
		})
	}

	submitComment(e){
		console.log('submitComment: '+JSON.stringify(this.state.comment))
		this.props.onCreate(this.state.comment)
	}

	render(){
		return(
			<div>
				<h3>Create Comment</h3>
				<input onChange={this.updateComment.bind(this)} id="username" type="text" className="form-control" name="username" placeholder="Username" /><br/>
				<input onChange={this.updateComment.bind(this)} id="body"  type="text" className="form-control" name="comment" placeholder="Comment" /> <br/>
				<button onClick={this.submitComment.bind(this)}  className="btn btn-info">Submit comment</button> 
				
			</div>
		)
	}
}

export default CreateComment