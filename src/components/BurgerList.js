import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {

  render() {

    const burgerList = this.props.burgers.map(burger => {
      return <BurgerItem burger={burger} onClickHandler={this.props.onClickHandler} deleteHandler={this.props.deleteHandler} />
    })

    return (
      <div className="BurgerList">
        { /* Render Burger Items Here*/ }
        {burgerList}
      </div>
    )
  }

}
