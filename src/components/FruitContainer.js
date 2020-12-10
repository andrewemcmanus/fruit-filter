import React, { Component } from 'react';
import Input from './Input';
import List from './List';

// this is the TOP component!

class FruitContainer extends Component {
  constructor(props) {
    super(props); //is this necessary?
    this.state = {
      // initialize the fruit list as the full list passed into props
      fruitsToDisplay: this.props.fruits,
      // initialize the filter value to an empty string (i.e. what we're filtering by)
      filterValue: ''
    };
  }

  handleFilterChange = (e) => {
    e.preventDefault();
    let filterValue = e.target.value;
    // remove fruits that don't contain the filter value
    const filteredFruitList = this.props.fruits.filter(fruit => {
      return fruit.toLowerCase().includes(filterValue.toLowerCase());
      // this is equivalent to:
        // if (fruit.toLowerCase() === filterValue.toLowerCase()) {
        // return true;
        // }
    })
    this.setState({
      fruitsToDisplay: filteredFruitList, filterValue
    });
  }
  render() {
    // NOTES ON ACCESS:
    // inside of Input component, in order to access props, I have to say props.value (see above)
    // inside of List Component, in order to access props, I have to say props.fruits (see above)
    return (
      <div>
        <Input value={this.state.filterValue} onChange={this.handleFilterChange} />
        <List fruits={this.state.fruitsToDisplay}/>
      </div>
    )
  }
}

export default FruitContainer;
