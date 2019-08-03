import React, {Component} from 'react';
import './App.css';

import Card from "./Card/Card.js";
import Tableau from "./Tableau/Tableau.js";
import Foundations from "./Foundations/Foundations.js";

import { createDeck, shuffle } from "./deck.js";

class App extends Component {
    constructor(props) {
        super(props);

        let deck = shuffle(createDeck());

const tableauPileCount = 3;
        
        let tableauState = [];
        for (let i=0; i<tableauPileCount; i++) {
            tableauState.push([]);
        }

        for (let i=0; i<tableauPileCount; i++) {
            //for (let j=i; j<tableauPileCount; j++) {
                //piles[j].push(initCards.pop());
            //}
            tableauState[i].push(deck.pop());
        }

        this.state = {
            deck: deck,
            discard: [],
            tableau: tableauState,
            currCard: null
        };
    }

    drawCard = () => {

        if (this.state.deck.length === 0) {
            this.setState(prev => {
                return {
                    deck: prev.discard.reverse().slice(),
                    discard: []
                }
            });
        } else {
            this.setState(prev => {
                let c = prev.deck.pop();
                if (prev.discard.length > 1) {
                    prev.discard[prev.discard.length-1].moveable = {
                        from: null,
                        status: false
                    }; 
                }
                prev.discard.push(c);
                return {
                    discard: prev.discard,
                    currCard: c
                }
            });
        }
        
    }

    moveCard = () => {
        if (this.state.discard.length > 0) {
            let discard = this.state.discard.slice();
            let top = discard[discard.length-1];
            let moveStatus = top.moveable === undefined ? true : !top.moveable.status;
            top.moveable = {
                from: "discard",
                status: moveStatus
            }
            this.setState({
                "discard": discard,
                currCard: top
            });
        }
    }

    updateCurrCard = (card) => {
        this.setState({currCard: card});
    }

    updateTableau = (t) => {
        this.setState({tableau: t})
    }

    discardHandler = () => { // discard from discard pile
        this.setState(state => {
            state.discard.pop();
            return { 
                discard: state.discard,
                currCard: null
            }
        });
    }

    discardFromTableau = (pile) => {
        this.setState(s => {
            s.tableau[pile].pop();
            return {
                currCard: null,
                tableau: s.tableau
            };
        });
    }

    render() {
        let drawCard = this.state.deck.length === 0 ? {n:"None",val:-1} : null;
        let disCard = this.state.discard.length === 0 ? 
                        {n:"None",val:-1} : 
                        this.state.discard[this.state.discard.length-1];

        return (
        <div className="App container">
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col">
                            <Card card={drawCard} clickHandler={this.drawCard}/>
                        </div>
                        <div className="col">
                            <Card className="col-md-6" card={disCard} clickHandler={this.moveCard}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Foundations 
                        card={this.state.currCard} 
                        discard={this.discardHandler}
                        discardFromTableau={this.discardFromTableau}
                    />
                </div>
            </div>
            <div>
                <Tableau 
                    tableau={this.state.tableau} 
                    card={this.state.currCard}
                    discard={this.discardHandler}
                    updateCurrCard={this.updateCurrCard}
                    updateTableau={this.updateTableau}
                />
            </div>
        </div>
        );
    }
}

export default App;
