import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {

	constructor(){
		super()
		this.state = {
			list: [
				{body:'commnt1',username:'u1',timestamp:'10:30'},
				{body:'commnt2',username:'u2',timestamp:'10:45'},
				{body:'commnt3',username:'u3',timestamp:'10:57'},
			]
		}
	}

	render(){

		const commentList = this.state.list.map((comment, i) => {
			return(
				<li><Comment currentComment={comment} /></li>
			)
		})

		return(
			<div>
			<h2>Comments: Zone 1</h2>
			<div style={styles.comments.commentsBox}>
				<ul style={{listStyleType:'none'}}>
					{ commentList }
				</ul>
			</div>
			</div>
		)
	}
}

export default Comments