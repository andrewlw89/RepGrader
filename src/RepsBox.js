//RepsBox.js
import React, { Component } from 'react';
import axios from 'axios';
import RepsList from './RepsList';
import RepsForm from './RepsForm';
import style from './style';

class RepsBox extends Component {
 	
 	constructor(props) {
 		super(props);
 		this.state = { data: [] };
 		this.loadRepsFromServer = this.loadRepsFromServer.bind(this);
 		this.handleRepsSubmit = this.handleRepsSubmit.bind(this);
 	}

 	loadRepsFromServer() {
 		axios.get(this.props.url).then(res => {
 			this.setState({ data: res.data });
 		})
 	}

 	handleRepsSubmit(reps) {
 		axios.post(this.props.url, reps).then(res => {
 			console.log(res);
 			this.setState({ data: res});
 		})
 		.catch(err => {
 			console.log(err);
 		});
 	}

 	componentDidMount() {
 		this.loadRepsFromServer();
 		setInterval(this.loadRepsFromServer, this.props.pollInterval);
 	}

 	render() {
 	return (
 		<div style={ style.repsBox }>
 			<h2>Repetitions:</h2>
 			<RepsList data={ this.state.data }/>
 			<RepsForm onRepsSubmit={ this.handleRepsSubmit }/>
 		</div>
 	)
 }
}
export default RepsBox;