//RepsList.js
import React, { Component } from 'react';
import Reps from './Reps';
import style from './style';

class RepsList extends Component {
	render() {
 		let repsNodes = this.props.data.map(reps => {
 			return (
 				<Reps name={ reps.name } key={ reps['_id'] } uniqueID={ reps['_id'] } onRepsDelete={ this.props.onRepsDelete } onRepsUpdate={ this.props.onRepsUpdate } age={reps.age} situps={reps.situps} pushups={reps.pushups}>
 				</Reps>
 			)
 		})
 		
 		return (
 			<div style={ style.repsList }>
	 			<table>
	 				<thead>
	 					<tr>
	 						<th>Name</th>
	 						<th>Age</th>
	 						<th>Situps</th>
	 						<th>Pushups</th>
	 					</tr>
	 				</thead>
	 				<tbody>
	 					{ repsNodes }
	 				</tbody>
	 			</table>
 			</div>
 		)
 	}
}
export default RepsList;