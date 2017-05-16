import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'
import { APIManager } from '../../utils'

class Zones extends Component {
	constructor(){
		super()
		this.state = {
			zone:{
				name: '',
				zipCode: ''
			},
			list: [
				/*{name:'Zone 1',zipCode:'10011',numComments:10},
				{name:'Zone 2',zipCode:'10012',numComments:20},
				{name:'Zone 3',zipCode:'10013',numComments:30},
				{name:'Zone 4',zipCode:'10014',numComments:40}*/
			]
		}
	}

	

	componentDidMount(){
		console.log('componentDidMount: ')

		APIManager.get('/api/zone', null, (err, response) =>{

			if(err){
				console.log('Error: '+err.message)
			}
			
			console.log('RES: '+ JSON.stringify(response.results))

			this.setState({
				list: response.results
			})
		})

		// superagent
		// .get('/api/zone')
		// .query(null)
		// .set('Accept','application/json')
		// .end((err, response)=> {

			// console.log(JSON.stringify(response.body))
			// let results = response.body.results

		// })
	}


	submitZone(e){

		console.log('submitComment: '+JSON.stringify(this.state.zone))

		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone['zipCodes'] = updatedZone.zipCode.split(',')
		APIManager.post('/api/zone', updatedZone, (err, response) => {
			if(err){
				console.log('ERROR: '+err.message)
				return
			}

			console.log('Zone Created: '+JSON.stringify(response))
			let updatedList = Object.assign([], this.state.list)
			updatedList.push(response.result)

			this.setState({
				list: updatedList
			})
		})

		// APIManager.post()

		// let updatedList = Object.assign([], this.state.list)
		// updatedList.push(this.state.zone)

		// this.setState({
		// 	list: updatedList
		// })
	}

	updateZone(event){
		console.log('updateZone: '+event.target.id+' == '+event.target.value)
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[event.target.id] = event.target.value

		this.setState({
			zone: updatedZone
		})
	}

	

	render(){

		const listItems = this.state.list.map((zone, i) => {
			return(
				<li key={i}><Zone currentZone={zone} /></li>
			)
		})
		return(
			<div>
				<ol>
					{listItems}
				</ol>
				<input type="text" id="name" className="form-control" placeholder="Zone" onChange={this.updateZone.bind(this)} /><br/>
				<input type="text" id="zipCode" placeholder="ZipCode" className="form-control" onChange={this.updateZone.bind(this)} /><br/>
				<button onClick={this.submitZone.bind(this)} className="btn btn-info">Submit Zone</button> 

			</div>
		)
	}
}

export default Zones