import React, { Component } from 'react';

export default class BurgerDisplay extends Component {

  render() {
    return (
      <div className="BurgerDisplay">
        <h2>{this.props.burgerObj.name}</h2>
        <br/>
        <img src={this.props.burgerObj.imgURL} alt="" />
        <br/>

        <select onChange={e => this.props.filterHandler(e)}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  }

}
