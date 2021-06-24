import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#365c89';
  }
  
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '500',
      fontSize: '1em',
      height: '45px',
    };
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red'
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '500',
      fontSize: '1em',
    };
  }
}

export { InfoAlert, ErrorAlert };