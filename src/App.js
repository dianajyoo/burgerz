import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgers: [],
    filteredArray: [],
    burgerObj: {}
  }

  componentDidMount() {
    fetch('http://localhost:3001/burgers')
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          burgers: json,
          filteredArray: json
        })
      })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} onClickHandler={this.onClickHandler} deleteHandler={this.deleteHandler} filterHandler={this.filterHandler} />
        <BurgerDisplay burgerObj={this.state.burgerObj} deleteHandler={this.deleteHandler} filterHandler={this.filterHandler} />
      </div>
    );
  }

  onClickHandler = (e, object) => {
    console.log(object)
    this.setState({
      burgerObj: object
    })
  }

  deleteHandler = (e, object) => {
    console.log('clicked');
    this.setState({
      burgers: [...this.state.filteredArray].filter(burger => {
        return object !== burger
      })
    })
  }

  filterHandler = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'Relatable') {
      this.setState({
        burgers: [...this.state.filteredArray].filter(burger => {
          return burger.category === 'Relatable'
        })
      })
    } else if (e.target.value === 'Bougie') {
      this.setState({
        burgers: [...this.state.filteredArray].filter(burger => {
          return burger.category === 'Bougie'
        })
      })
    } else {
      this.setState({
        burgers: [...this.state.filteredArray].map(burger => {
          return burger
        })
      })
    }
  }

}

export default App;
