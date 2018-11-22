import React from 'react';
import {render} from 'react-dom';

class Clock extends React.Component {
    render() {
        return <p>Current Time: {this.props.current_time}</p>;
    }
}

export default Clock;