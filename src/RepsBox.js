//RepsBox.js
import React, { Component } from 'react';
import RepsList from './RepsList';
import RepsForm from './RepsForm';
import DATA from './data';
import style from './style';
class RepsBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
 <div style={ style.repsBox }>
 <h2>Repetitions:</h2>
 <RepsList data={ DATA }/>
 <RepsForm />
 </div>
 )
 }
}
export default RepsBox;