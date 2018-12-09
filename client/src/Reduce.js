import React from 'react';

class Reduce extends React.Component{
  constructor(props){
    super(props);
    this.state = {  fruitCount: '',
                    fruitBasket: ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ]
                };
  }
  updateCount = () => {
    const count = this.state.fruitBasket.reduce( (tally, fruit) => {
        tally[fruit] = (tally[fruit] || 0) + 1 ;
        return tally;
    } , {});
    console.log('fruitCount: ', count);
    this.setState({fruitCount: JSON.stringify(count)});
  }
  render(){
    return (
        <div className="reduceContainer">
          <h1>Use of Reduce()</h1>
          <h3 className='fruitList'> fruitBasket : [{this.state.fruitBasket.join(',')}]</h3>
          <div>
              <button className='fruitCount' onClick={() => this.updateCount()}> FruitCount --> Reduce()  </button>
          </div>
          <div>
              <h3>fruitCount: </h3> {this.state.fruitCount}
          </div>
          
        </div>
    );
  }
};
export default Reduce;