import React, { Component } from 'react';
import { Home } from 'containers';

class Wall extends Component {
    render() {
        return (
            <div>
              <Home username={this.props.match.params.username}/>
            </div>
        );
    }
}

export default Wall;
