import React, { Component } from 'react';

class FormattedDate extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
  
    componentDidMount() {
        // console.log(props)
        // this.setState({
        //     date: props
        // });
    }
  
    componentWillUnmount() {
    }
    
    render() {
      return (
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      );
    }
}
  
export default FormattedDate;
