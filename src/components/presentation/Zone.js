import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
	

	render(){ 
		const style = styles.zone
		const zipCode = this.props.currentZone.zipCodes[0]
		return( 
			<div style={style.container}> 
			<h2 style={style.h2Header}>
				<a className="abb" style={style.h2Header_a} href="#">{this.props.currentZone.name}</a>
			</h2>
	<span className="detail">{zipCode}</span><br/> 
	<span className="detail">{this.props.currentZone.numComments} comments</span>
					
			</div>
		)
	}
}

export default Zone