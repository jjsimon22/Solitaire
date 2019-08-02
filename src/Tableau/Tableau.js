import React, { Component } from 'react';
import Card from "../Card/Card"
import './Tableau.scss';

class Tableau extends Component {
    constructor(props){
        super(props);

        let piles = [];
        for (let i=0; i<5; i++) {
            piles.push([])
        }
        this.state = {
            piles: piles
        };
    }

    clickHandler = (pile) => {

        if (this.props.card.moveable) {
            let {piles} = this.state;
            let card = JSON.parse(JSON.stringify(this.props.card));

            if (piles[pile].length === 0) {
                card.moveable = false;  
                this.setState(prev => {
                    prev.piles[pile].push(card);
                    return {
                        piles: prev.piles
                    };
                });
                // remove card from discard
                this.props.discard();
            } else {
                card.moveable = false;
                this.setState(prev => {
                    prev.piles[pile].push(card);
                    return {
                        piles: prev.piles
                    };
                });
                this.props.discard();
            }
        }
    }

    render() {
        console.log(this.state.piles);
        const piles = this.state.piles.map((p,i) => {
            let top = null;
            if (p.length > 0) {
                top = p[p.length-1];
                console.log("top", p, i, top);
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

export default Tableau;