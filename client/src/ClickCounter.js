import React, { Component } from 'react';
class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.state = {"count": 0, "step": this.props.step};
	}
	handleClick(){
		let totalCount = this.state.count + this.props.step;
		this.setState({count: totalCount});
		this.props.click(totalCount);
	}
	render(){
		  return <button className="clickCounter" onClick={() => this.handleClick()}>{this.props.children} </button>;
	}
};
export default ClickCounter;
