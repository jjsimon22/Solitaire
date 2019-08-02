import React, {Component} from 'react';
import './App.css';

import Card from "./Card/Card.js";
import Tableau from "./Tableau/Tableau.js";
import Foundations from "./Foundations/Foundations.js";

import { createDeck, shuffle } from "./deck.js";


class App extends Component {
    constructor(props) {
        super(props);

        //let deck = createDeck();

        this.state = {
            deck: shuffle(createDeck()), //createDeck()
            discard: []
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
                    prev.discard[prev.discard.length-1].moveable = false; 
                }
                prev.discard.push(c);
                return {
                    discard: prev.discard
                }
            });
        }
        
    }

    moveCard = () => {
        if (this.state.discard.length > 0) {
            let discard = this.state.discard.slice();
            let top = discard[discard.length-1];
            top.moveable = top.moveable === undefined  ? true : !top.moveable;
            this.setState({
                "discard": discard
            });
        }
    }

    discardHandler = () => {
        this.setState(state => {
            state.discard.pop();
            return { discard: state.discard }
        });
    }

    render() {
        let drawCard = this.state.deck.length === 0 ? {n:"None",val:-1} : null;
        let disCard = this.state.discard.length === 0 ? 
                        {n:"None",val:-1} : 
                        this.state.discard[this.state.discard.length-1];

        return (
        <div className="App">
            <div>
                <Card card={drawCard} clickHandler={this.drawCard}/>
                <Card card={disCard} clickHandler={this.moveCard}/>
            </div>
            <Foundations card={disCard} discard={this.discardHandler}/>
            {/*<Tableau card={disCard} discard={this.discardHandler}/>
            */}
          
        </div>
        );
    }
}

export default App;
