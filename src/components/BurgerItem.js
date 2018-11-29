import React, { Component } from 'react';

export default class BurgerItem extends Component {

  render() {
    return (
      <div>
        <div className="BurgerItem">
          <h2>{this.props.burger.name}</h2>
        </div>

        <div className="BurgerBottomBun">
          <button onClick={e => this.props.onClickHandler(e, this.props.burger)}>Show</button>
          <button onClick={e => this.props.deleteHandler(e, this.props.burger)}>Delete</button>
        </div>
      </div>
    )
  }

}
