import React, { Component } from 'react';
import Card from "../Card/Card"
import './Tableau.scss';

class Tableau extends Component {

    clickHandler = (pile) => {
        let toPile = this.props.tableau[pile];
        if (this.props.card && this.props.card.moveable) {
            if (toPile.length === 0) {
                this.moveCard(pile);
            } else {

                if (this.props.card.moveable.from === "tableau" &&
                    this.props.card.val === toPile[toPile.length-1].val &&
                    this.props.card.suit === toPile[toPile.length-1].suit) {
                    // deselect
                    let tableau = JSON.parse(JSON.stringify(this.props.tableau));
                    tableau[pile][tableau[pile].length-1].moveable = {
                        from: "tableau",
                        status: false,
                        pile: pile
                    }
                    this.props.updateTableau(tableau);
                    this.props.updateCurrCard(null);
                    return;
                }
                // check is opposite suit color and val is exactly 1 less than top card
                if (toPile[toPile.length-1].color !== this.props.card.color && 
                    toPile[toPile.length-1].val - this.props.card.val === 1) {
                    this.moveCard(pile);
                }
            }
        } else if (toPile.length > 0) {
            let tableau = JSON.parse(JSON.stringify(this.props.tableau));
            tableau[pile][tableau[pile].length-1].moveable = {
                from: "tableau",
                status: true,
                pile: pile
            }
            this.props.updateTableau(tableau);
            this.props.updateCurrCard(tableau[pile][tableau[pile].length-1]);
        }
    }

    moveCard = (pile) => {
        let card = JSON.parse(JSON.stringify(this.props.card));
        card.moveable.status = false;

        let tableau = JSON.parse(JSON.stringify(this.props.tableau));
        tableau[pile].push(card);

        if (card.moveable.from === "tableau") {
            tableau[card.moveable.pile].pop();
        } else {
            this.props.discard(); // remove card from discard cuz now in tableau
        }
        this.props.updateTableau(tableau);
        this.props.updateCurrCard(null);
    }

    render() {
        const tableau = this.props.tableau.map((p,i) => {
            let top = null;
            if (p.length > 0) {
                top = p[p.length-1];
            }
            return (
                <div key={i} className="col" onClick={() => this.clickHandler(i)}>
                    <Card card={top}/>
                </div>
            );
        });

        return (
          <div className="Tableau row">
              { tableau }
          </div>
        );
    }
}

export default Tableau;