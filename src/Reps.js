//Reps.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
class Reps extends Component {
 render() {
 return (
	<tr>
		<td>{this.props.name}</td>
	 	<td>{this.props.age}</td>
	 	<td>{this.props.situps}</td>
	 	<td>{this.props.pushups}</td>
	</tr>
 )
 }
}
export default Reps;