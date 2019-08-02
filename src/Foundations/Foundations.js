import React, { Component } from 'react';
import './Foundations.css';

import Card from "../Card/Card";

class Foundations extends Component {
    constructor(props){
        super(props);
        this.state = {
            piles: [[],[],[],[]]
        };
    }

    clickHandler = (pile) => {

        if (this.props.card.moveable) {
            let {piles} = this.state;
            
            if (piles[pile].length === 0 && this.props.card.val === 1) {
                this.moveCard(pile);
            } else if (piles[pile].length > 0) {

                let top = piles[pile][piles[pile].length-1]; // get top card

                // check is same suit and val is exactly 1 more than top card
                if (top.suit === this.props.card.suit && this.props.card.val-top.val === 1) {
                    this.moveCard(pile);
                }
            }
        }
    }

    moveCard = (pile) => {
        let card = JSON.parse(JSON.stringify(this.props.card));
        card.moveable = false;

        this.setState(prev => {
            prev.piles[pile].push(card);
            return {
                piles: prev.piles
            };
        });
        this.props.discard(); // remove card from discard cuz now in foundation
    }

    render() {
        
        if (this.state.piles.reduce((acc,p) => acc += p.length,0) === 12) { 
            console.log("You win!"); 
        }

        const piles = this.state.piles.map((p,i) => {
            let top = null;
            if (p.length > 0) {
                top = p[p.length-1];
            }
            return <div key={i} className="pile" onClick={() => this.clickHandler(i)}><Card card={top}/></div>
        });

        return (
          <div className="Tableau">
              { piles }
          </div>
        );
    }
}

export default Foundations;