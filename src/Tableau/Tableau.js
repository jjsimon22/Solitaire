import React, { Component } from 'react';
//import Card from "../Card/Card"
import Pile from "../Pile/Pile"

import './Tableau.scss';


export const isMoveLegal = (fromCard, toCard) => {
    return (fromCard.color !== toCard.color && toCard.val - fromCard.val === 1)
}

class Tableau extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pileSelection: null,
            tableauAction: null
        }
    }

    componentDidUpdate(oldProps) {
        if (oldProps.clearTableauAction !== this.props.clearTableauAction) {
            if (this.props.clearTableauAction) {
                this.setState({tableauAction: null});
            }
        }
        
    }

    handleSelection = (card) => { //(pileIdx, cardIdx) => {
//debugger;
        
        if (card && card.moveable.status && card.moveable.from === "discard") {
            let pileIdx = card.moveable.pileTo;
            let tableau = JSON.parse(JSON.stringify(this.props.tableau));
            if (isMoveLegal(card,tableau[pileIdx][tableau[pileIdx].length-1])) {
                card.moveable = {
                    from: "tableau",
                    status: false
                }
                tableau[pileIdx].push(card);

                this.props.updateTableau(tableau);
                this.props.updateCurrCard(null);
                this.props.discard(); // success now remove from discard pile
                this.setState({tableauAction: null})
            } else {
                console.log("Illegal move",card,tableau[pileIdx][tableau[pileIdx].length-1]);
            }
        } else {
            let pileIdx = card.moveable ? card.moveable.pile : null;
            let cardIdx = card.moveable ? card.moveable.cardIdx : null;
            console.log("handleSelection()", card, pileIdx, cardIdx, this.state.tableauAction);

            this.props.updateCurrCard(null); // deselect if discard card is selected
            if (pileIdx === null) { // deselect - reset action
                this.setState({tableauAction: null});
            } else {
                if (this.state.tableauAction === null) { // pile selected
                    this.setState({
                        tableauAction: {
                            pileFrom: pileIdx,
                            cardIndex: cardIdx
                        }
                    });

                    // top of pile single card select
                    if ((this.props.tableau[pileIdx].length-1) === cardIdx) {
                        this.props.tableau[pileIdx][cardIdx].moveable.status = true;
                        this.props.updateCurrCard(this.props.tableau[pileIdx][cardIdx]);
                    }
                } else {
                    if (pileIdx !== this.state.tableauAction.pileFrom) { // move pile
                        let tableau = JSON.parse(JSON.stringify(this.props.tableau));
                        let bottomOfFrom = tableau[this.state.tableauAction.pileFrom][this.state.tableauAction.cardIndex];
                        let topOfTo = tableau[pileIdx][tableau[pileIdx].length-1];

                        if (isMoveLegal(bottomOfFrom, topOfTo)) {
                            let {tableauAction} = this.state;
                            let fromCards = tableau[tableauAction.pileFrom].splice(tableauAction.cardIndex)

                            fromCards.forEach(c => {
                                c.moveable.status = false;
                                c.moveable.pile = pileIdx;
                            });

                            tableau[pileIdx] = tableau[pileIdx].concat(fromCards);
                            this.props.updateTableau(tableau);
                            this.props.updateCurrCard(null);
                            this.setState({tableauAction: null})
                        } else {
                            console.log("Illegal move");
                        }
                    } else { // update tableau action with new selection
                        this.setState({
                            tableauAction: {
                                pileFrom: pileIdx,
                                cardIndex: cardIdx
                            }
                        });
                    }
                }
            }
        }
    }

    render() {
//console.log("this.props.tableau", this.props.tableau);
        const tableau = this.props.tableau.map((p,i) => {
            return (<Pile 
                        key={i} 
                        index={i} 
                        pile={p}
                        selectedCard={this.props.selectedCard}
                        handleSelection={this.handleSelection}
                        tableauAction={this.state.tableauAction}
                    />);
        }) 
        return (
          <div className="Tableau row">
                { tableau }
          </div>
        );
    }
}

export default Tableau;