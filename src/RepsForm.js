//RepsForm.js
import React, { Component } from 'react';
import style from './style';

class RepsForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', age: 0, situps: 0, pushups: 0 };
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleSitupsChange = this.handleSitupsChange.bind(this);
		this.handlePushupsChange = this.handlePushupsChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	handleAgeChange(e) {
		this.setState({ age: e.target.value });
	}
	
	handleSitupsChange(e) {
		this.setState({ situps: e.target.value });
	}

	handlePushupsChange(e) {
		this.setState({ pushups: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let name = this.state.name.trim();
 		let age = this.state.age;
 		let situps = this.state.situps;
 		let pushups = this.state.pushups;
 		console.log(name, age, situps, pushups);
 		if (!age || !name || !situps || !pushups) {
 			return;
 		}
 		this.props.onRepsSubmit({ name: name, age: age, situps: situps, pushups: pushups });
 		this.setState({ name: '', age: 0, situps: 0, pushups: 0 });
	}

	render() {
		return (
			<form style={ style.repsForm } onSubmit={ this.handleSubmit }>
				<input
					type='text'
					placeholder='Your name…'
					style={ style.repsFormName}
					onChange={ this.handleNameChange } />
				<input
					type='text'
					placeholder='Age'
					style={ style.repsFormAge}
					onChange={ this.handleAgeChange } />
				<input
					type='text'
					placeholder='Situps'
					style={ style.repsFormSitups}
					onChange={ this.handleSitupsChange } />
				<input
					type='text'
					placeholder='Pushups'
					style={ style.repsFormPushups}
					onChange={ this.handlePushupsChange } />
				<input
					type='submit'
					style={ style.repsFormPost }
					value='Post' />
			</form>
		)
	}
}
export default RepsForm;