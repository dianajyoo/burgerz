import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter burgers={this.props.burgers} filterHandler={this.props.filterHandler} />
        <BurgerList burgers={this.props.burgers} onClickHandler={this.props.onClickHandler} deleteHandler={this.props.deleteHandler} />
      </div>
    )
  }
}
