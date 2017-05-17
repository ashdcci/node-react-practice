import React,{ Component } from 'react'

class CreateZone extends Component{

	constructor(){
		super()
		this.state = {
			zone:{
				name: '',
				zipCode: ''
			}
		}
	}

	updateZone(e){
		console.log('Update Zone content'+ e.target.id+' = '+e.target.value)
		let updateZone = Object.assign({},this.state.zone)
		updateZone[e.target.id] = e.target.value

		this.setState({
			zone: updateZone
		})
	}

	submitZone(){
		console.log('Update Zone content'+JSON.stringify(this.state.zone))
		let updated = Object.assign({}, this.state.zone)
		this.props.onCreate(this.state.zone)
		
	}

	render(){
		return(
			<div>
			<input type="text" id="name" className="form-control" placeholder="Zone" onChange={this.updateZone.bind(this)} /><br/>
				<input type="text" id="zipCode" placeholder="ZipCode" className="form-control" onChange={this.updateZone.bind(this)} /><br/>
				<button onClick={this.submitZone.bind(this)} className="btn btn-info">Submit Zone</button> 

			</div>
		)
	}
}

export default CreateZone