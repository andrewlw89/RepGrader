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
 this.setState({ text: e.target.value });
 }
 handleSitupsChange(e) {
 this.setState({ text: e.target.value });
 }
 handlePushupsChange(e) {
 this.setState({ text: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log('${this.state.name} is "${this.state.age}" and did "${this.state.situps}" situps and "${this.state.pushups}" pushups!"');
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