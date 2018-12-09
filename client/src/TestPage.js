import React from 'react';
import { Link } from 'react-router-dom';
import ClickCounter from './ClickCounter';

class TestPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0};
  }
  updateClick = cnt => {
    this.setState({count : cnt});
  }
  render(){
    return (
        <div>
          <Link to="/">Go home</Link>
          <h3> 
            Count : 
            <span> {this.state.count} </span>
          </h3>
          
          <div>
              <ClickCounter click={(count) => this.updateClick(count)}  step={1} key="1"> B->1 </ClickCounter>
              <ClickCounter click={(count) => this.updateClick(count)}  step={2} key="2"> B->2 </ClickCounter>
              <ClickCounter click={(count) => this.updateClick(count)}  step={3} key="3"> B->3 </ClickCounter>
          </div>
          
        </div>
    );
  }
};
export default TestPage;