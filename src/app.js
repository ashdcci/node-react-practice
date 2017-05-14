import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'

class App extends Component {
	render(){
		return(
			<div>
				Hello React! how are you today!
				<Home />
			</div>
			)
	}
}

ReactDOM.render(<App />,document.getElementById('root'))