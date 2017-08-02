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
 		this.handleRepsDelete = this.handleRepsDelete.bind(this);
 		this.handleRepsUpdate = this.handleRepsUpdate.bind(this);
 	}

 	loadRepsFromServer() {
 		axios.get(this.props.url).then(res => {
 			this.setState({ data: res.data });
 		})
 	}

 	handleRepsSubmit(reps) {
 		let allReps = this.state.data;
 		reps.id = Date.now();
 		let newReps = allReps.concat([reps]);
 		this.setState({ data: newReps });
 		axios.post(this.props.url, reps).catch(err => {
 			console.log(err);
 			this.setState({ data: allReps });
 		});
 	}

 	handleRepsDelete(id) {
 		axios.delete(`${this.props.url}/${id}`).then(res => {
 			console.log('Comment deleted');
 		}).catch(err => {
 			console.error(err);
 		});
 	}

 	handleRepsUpdate(id, reps) {
 		//sends the comment id and new author/text to our api
 		axios.put(`${this.props.url}/${id}`, reps).catch(err => {
 			console.log(err);
 		})
 	}

 	componentDidMount() {
 		this.loadRepsFromServer();
 		setInterval(this.loadRepsFromServer, this.props.pollInterval);
 	}

 	render() {
 	return (
 		<div style={ style.repsBox }>
 			<h2>Repetitions:</h2>
 			<RepsList
 			onRepsDelete={ this.handleRepsDelete }
 			onRepsUpdate={ this.handleRepsUpdate }
 			data={ this.state.data }/>
 			<RepsForm onRepsSubmit={ this.handleRepsSubmit }/>
 		</div>
 	)
 }
}
export default RepsBox;