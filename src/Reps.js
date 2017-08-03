//Reps.js
import React, { Component } from 'react';
import getScores from './getScores';
import style from './style';
class Reps extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			name: props.name,
			age: props.age,
			gender: props.gender,
			situps: props.situps,
			pushups: props.pushups
		}
		this.handleToggle = this.handleToggle.bind(this);
		this.deleteReps = this.deleteReps.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleSitupsChange = this.handleSitupsChange.bind(this);
		this.handlePushupsChange = this.handlePushupsChange.bind(this);
		this.handleRepsUpdate = this.handleRepsUpdate.bind(this);
	}

  handleToggle(e) {
    e.preventDefault();
    return this.setState({
      edit: !this.state.edit
    });
  }

	handleRepsUpdate(e) {
 		e.preventDefault();
 		let id = this.props.uniqueID;
 		//if name or age changed, set it. if not, leave null and our PUT 
 		//request will ignore it.
 		let name = (this.state.name) ? this.state.name : null;
		let age = (this.state.age) ? this.state.age : null;
		let situps = (this.state.situps) ? this.state.situps : null;
		let pushups = (this.state.pushups) ? this.state.pushups : null;
		let reps = { name: name, age: age, situps: situps, pushups: pushups };
		this.props.onRepsUpdate(id, reps);
		this.setState({
			edit: !this.state.edit
		})
	}

	deleteReps(e) {
		e.preventDefault();
		let id = this.props.uniqueID;
		this.props.onRepsDelete(id);
	}

	handleAgeChange(e) {
		this.setState({ age: e.target.value });
	}

	handleGenderChange(e) {
		console.log(e.target.value);
		this.setState({ gender: e.target.value });
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	handleSitupsChange(e) {
		this.setState({ situps: e.target.value });
	}

	handlePushupsChange(e) {
		this.setState({ pushups: e.target.value });
	}

	recordRow() {
		return (
			<tr>
				<td>{this.state.name}</td>
			 	<td>{this.state.age}</td>
			 	<td>{this.state.gender}</td>
			 	<td>{this.state.situps}</td>
			 	<td>{this.state.pushups}</td>
			 	<td><a style={ style.repsFormPost } onClick={this.handleToggle}>Edit</a></td>
			 	<td><a style={ style.repsFormPost } onClick={this.deleteReps}>Delete</a></td>
			</tr>
		)
	}

	recordForm() {
		return (
			<tr>
				<td>
					<input
						type='text'
						value={ this.state.name }
						style={ style.repsFormName} 
						onChange={ this.handleNameChange }/>
				</td>
				<td>
					<input
						type='text'
						value={ this.state.age}
						style={ style.repsFormAge} 
						onChange={ this.handleAgeChange }/>
				</td>
				<td>
					<select value={ this.state.gender } onChange={ this.handleGenderChange }>
						<option value="m">Male</option>
          	<option value="f">Female</option>
        	</select>
        </td>
				<td>
					<input
						type='text'
						value={ this.state.situps}
						style={ style.repsFormSitups} 
						onChange={ this.handleSitupsChange } />
				</td>
				<td>
					<input
						type='text'
						value={ this.state.pushups }
						style={ style.repsFormPushups} 
						onChange={ this.handlePushupsChange } />
				</td>
				<td>
					<a style={ style.repsFormPost } onClick={ this.handleRepsUpdate }>Submit</a>
				</td>
				<td>
					<a style={ style.repsFormPost } onClick={ this.handleToggle }>Cancel</a>
				</td>
			</tr>
	)}

	render() {
		if (this.state.edit) {
			return this.recordForm();
		} else {
			return this.recordRow();
		}
 	}
}
export default Reps;