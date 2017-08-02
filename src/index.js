//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import RepsBox from './RepsBox';

ReactDOM.render(
	<RepsBox 
	url='http://localhost:3001/api/reps'
	pollInterval={2000} />,
	document.getElementById('root')
);
