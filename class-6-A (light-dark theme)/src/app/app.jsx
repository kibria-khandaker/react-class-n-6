import React, { Component } from 'react';/* 8.4K (gzipped:3.4k) eita dile run kore na*/
import './app.css';

import DynamicTheme from '../features/dynamic-theme';

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class App extends Component{
	render(){
		return <div className='App'>
			<DynamicTheme />
		</div>;
		}
	}
export default App;