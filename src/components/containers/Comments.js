import React, { Component } from 'react'
import { CreateComment, Comment } from '../presentation'
import styles from './styles'
import superagent from 'superagent'
import { APIManager } from '../../utils'

class Comments extends Component {

	constructor(){
		super()
		this.state = {
			comment:{
				username: '',
				body: ''
			},
			list: [
				// {body:'commnt1',username:'u1',timestamp:'10:30'},
				// {body:'commnt2',username:'u2',timestamp:'10:45'},
				// {body:'commnt3',username:'u3',timestamp:'10:57'},
			]
		}
	}

	componentDidMount(){
		

		APIManager.get('/api/comment', null, (err, response) =>{

			if(err){
				console.log('Error: '+err.message)
			}
			
			console.log('RES: '+ JSON.stringify(response.results))

			this.setState({
				list: response.results
			})
		})
	}

	submitComment(comment){
		// console.log('submitComment'+JSON.stringify(comment))



		let updatedComment = Object.assign({}, comment)	
		APIManager.post('/api/comment', comment, (err, response) => {
			if(err){
				console.log('ERROR: '+err.message)
				return
			}

			console.log('Comment Created: '+JSON.stringify(response.result))
			let updatedList = Object.assign([], this.state.list)
			updatedList.push(response.result)

			this.setState({
				list: updatedList
			})
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

				<CreateComment onCreate={this.submitComment.bind(this)} />

			</div>
			</div>
		)
	}
}

export default Comments