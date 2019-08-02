import React, { Component } from 'react';
import Card from "../Card/Card"
import './Tableau.css';

class Tableau extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }
  render() {
    const piles = [
        <div class="pile"><Card card={null}/></div>,
        <div class="pile"><Card card={null}/></div>,
        <div class="pile"><Card card={null}/></div>,
        <div class="pile"><Card card={null}/></div>
    ];
    return (
      <div className="Tableau">
          { piles }
      </div>
    );
  }
}

export default Tableau;