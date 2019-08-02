import React, {Component} from 'react';
import './App.css';

import Card from "./Card/Card.js";
import Tableau from "./Tableau/Tableau.js";

import { createDeck, shuffle } from "./deck.js";


class App extends Component {
    constructor(props) {
        super(props);

        let deck = createDeck();
        deck.unshift({n:"end",val:-1,suit:"",color:""});

        this.state = {
            deck: deck,
            discard: [],
            currCard: null
        };
    }

    drawCard = () => {

        if (this.state.deck.length === 0) {
            this.setState(prev => {
                return {
                    deck: prev.discard.reverse().slice(),
                    discard: [],
                    currCard: null
                }
            });
        } else {
            this.setState(prev => {
                let c = prev.deck.pop()
                prev.discard.push(c);
                return {
                    currCard: c,
                    discard: prev.discard
                }
            });
        }
        
    }

    render() {
        
        return (
        <div className="App">
            <div>
                <Card card={null} clickHandler={this.drawCard}/>
                <Card card={this.state.currCard} />
            </div>
            <Tableau />
          
        </div>
        );
    }
}

export default App;
