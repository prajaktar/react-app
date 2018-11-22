import React from 'react';
import {render} from 'react-dom';
import Clock from './clock.jsx';
import Toggle from './toggle.jsx';

class App extends React.Component {
    getCurrentTime() {
        let date = new Date();
        return date.getFullYear();
    }
    render() {
        return (
            <div>
                <p>Hello World!</p>
                <Clock current_time = {this.getCurrentTime()}/>
                <Toggle/>
            </div>
            
        );
    }
}



render(<App/>, document.getElementById('app'))
