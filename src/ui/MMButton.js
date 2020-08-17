import React, { Component } from 'react';

// Main Menu Button at the Home Screen
class MMButton extends Component {

    render() {
        return (
            <button
                className={this.props.className}>
                {this.props.caption}
            </button>
        );
    }
}

export default MMButton
