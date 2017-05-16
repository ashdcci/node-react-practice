import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component {

	constructor(){
		super()
		this.state = {
			comment:{
				username: '',
				body: '',
				timestamp: ''
			},
			list: [
				// {body:'commnt1',username:'u1',timestamp:'10:30'},
				// {body:'commnt2',username:'u2',timestamp:'10:45'},
				// {body:'commnt3',username:'u3',timestamp:'10:57'},
			]
		}
	}

	ComponentDidMount(){
		superagent
		.get('/api/comment')
		.query(null)
		.set('Accept','application/json')
		.end((err, response)=> {

			if(err){
				console.log('Error: '+err)
			}
			
			console.log(JSON.stringify(response.body))
			let results = response.body.results

			this.setState({
				list: results
			})

		})
	}

	submitComment(){
		console.log('submitComment'+JSON.stringify(this.state.comment))

		let updatedList = Object.assign([], this.state.list)
		updatedList.push(this.state.comment)

		this.setState({
			list: updatedList
		})

	}

	updateUsername(event){
		
		//this.state.comment['username'] = event.target.value // wrong
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['username'] = event.target.value

		this.setState({
			comment: updatedComment
		})

	}

	updateBody(event){

		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['body'] = event.target.value

		this.setState({
			comment: updatedComment
		})		
	}

	updateTimestamp(event){

		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['timestamp'] = event.target.value

		this.setState({
			comment: updatedComment
		})		
	}



	render(){

		const commentList = this.state.list.map((comment, i) => {
			return(
				<li key={i}><Comment currentComment={comment} /></li>
			)
		})

		return(
			<div>
			<h2>Comments: Zone 1</h2>
			<div style={styles.comments.commentsBox}>
				<ul style={{listStyleType:'none'}}>
					{ commentList }
				</ul>

				<input onChange={this.updateUsername.bind(this)} type="text" className="form-control" name="username" placeholder="Username" /><br/>
				<input onChange={this.updateBody.bind(this)} type="text" className="form-control" name="comment" placeholder="Comment" /> <br/>
				<input onChange={this.updateTimestamp.bind(this)} type="text" className="form-control" name="comment" placeholder="update Timestamp" /> <br/>
				<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit comment</button> 


			</div>
			</div>
		)
	}
}

export default Comments