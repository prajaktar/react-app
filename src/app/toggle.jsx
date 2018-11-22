import React from 'react';
import {render} from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle_value: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            state => ({toggle_value: !this.state.toggle_value})
        );
    }

    render() {
        return(
            <div>
                <p><input type="checkbox" name="toggle" value="Toggle" onClick = {this.handleClick}></input>This is the current state: {this.state.toggle_value ? 'Yes' : 'No'}</p>
            </div>
        );
    }
}

export default Toggle;