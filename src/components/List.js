import React, { Component } from 'react';
// what variables is this inheriting from FruitContainer?
class List extends Component {
  constructor(props) {
    super();
    this.state = {

    };
  }
  render() {
    const fruitItems = this.props.fruits.map((eachFruit, idx) => {
      return <li key={idx}>{eachFruit}</li>
    });
    return (
      <div>
        <ul>
          {fruitItems}
        </ul>
      </div>

    )
  }
}

export default List;
