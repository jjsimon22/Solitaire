import React, { Component } from 'react';
import './Foundations.css';

import Card from "../Card/Card";
import { getTotalCardCount } from "../deck.js";

class Foundations extends Component {
    constructor(props){
        super(props);
        this.state = {
            piles: [[],[],[],[]]
        };
    }

    clickHandler = (pile) => {
        if (this.props.card && this.props.card.moveable) {
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
        card.moveable.status = false;

        this.setState(prev => {
            prev.piles[pile].push(card);
            return {
                piles: prev.piles
            };
        });

        if (card.moveable.from === "discard") {
            this.props.discard(); // remove card from discard cuz now in foundation
        } else {
            this.props.discardFromTableau(card.moveable.pile); // discard from tableau pile
        }
    }

    render() {
        
        // check if game over
        if (this.state.piles.reduce((acc,p) => acc += p.length,0) === getTotalCardCount()) { 
            console.log("You win!"); 
        }

        const piles = this.state.piles.map((p,i) => {
            let top = null;
            if (p.length > 0) {
                top = p[p.length-1];
            }
            return <div key={i} onClick={() => this.clickHandler(i)}><Card card={top}/></div>
        });

        return (
          <div className="row justify-content-end">
              { piles }
          </div>
        );
    }
}

export default Foundations;