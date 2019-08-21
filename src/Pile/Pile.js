import React, { Component } from 'react';
import './Pile.css';

import Card from "../Card/Card";

class Pile extends Component {
    constructor(props){
        super(props);

        /*let pile = this.props.pile.slice();
        for (let i=0; i<pile.length; i++) {
            pile[i].moveable = {
                from: "tableau",
                pile: this.props.index,
                status: false
            }
        }*/

        this.state = {
            pile: this.props.pile,
            currSelection: null
        };
    }

    componentDidUpdate(oldProps) {
        if (oldProps.pile.length !== this.props.pile.length) {
            this.setState({ pile: this.props.pile, currSelection: null });
        }
    }

    clickHandler = (cardIdx) => {

        // check if trying to move card from discard to a pile
        if (this.props.selectedCard && 
            this.props.selectedCard.moveable.from === "discard" &&
            this.props.selectedCard.moveable.status) {
            let {selectedCard} = this.props;
            selectedCard.moveable.pileTo = this.props.index;
            this.props.handleSelection(this.props.selectedCard);
            return;
        }

        let {pile} = this.state;
        if (pile[cardIdx].faceUp) {
            if (this.props.tableauAction === null) { // select
                
                for (let i=0; i<pile.length; i++) {
                    pile[i].moveable.status = i >= cardIdx ? true : false;
                }

                pile[this.props.index].moveable.from = "tableau";
                pile[this.props.index].moveable.pile = this.props.index;
                pile[this.props.index].moveable.cardIdx = cardIdx;

                this.setState({pile: pile, currSelection: cardIdx});
                //this.props.handleSelection(this.props.index, cardIdx);
                this.props.handleSelection(pile[this.props.index]);
                
                
            } else {
                pile[this.props.index].moveable.from = "tableau";
                pile[this.props.index].moveable.pile = this.props.index;
                pile[this.props.index].moveable.cardIdx = cardIdx;
                if (this.props.tableauAction.pileFrom === this.props.index) {
                    if (cardIdx !== this.state.currSelection) { 
                        for (let i=0; i<pile.length; i++) {
                            pile[i].moveable.status = i >= cardIdx ? true : false;  
                        }
                        
                        this.setState({pile: pile, currSelection: cardIdx});
                        //this.props.handleSelection(this.props.index, cardIdx);
                        this.props.handleSelection(pile[this.props.index]);
                    } else { // deselect
                        for (let i=0; i<pile.length; i++) {
                            pile[i].moveable.status = false;
                        }
                        this.setState({pile: pile, currSelection: null});
                        this.props.handleSelection(null, null);
                    }
                } else { // another pile trying to move to this pile 
                    //this.props.handleSelection(this.props.index, null);
                    this.props.handleSelection(pile[this.props.index]);
                }
            }
        } else if (cardIdx === pile.length-1) { // face down card - only open if top of pile
            pile[cardIdx].faceUp = true;
            this.setState({pile:pile})
        }

    }

    render() {
        let cards = <Card card={null} />
        if (this.state.pile.length > 0) {
            cards = this.state.pile.map((c, i) => {
                return <Card key={i} card={c} clickHandler={() => this.clickHandler(i)} />
            });
        }

        return (
            <div>
                {cards}    
            </div>
        );
    }
}

export default Pile;