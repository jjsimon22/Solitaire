import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

    render() {
        let cardClasses = "Card";
        if (this.props.card && this.props.card.moveable) {
            cardClasses += " moveable";
        }

        return (
            <div className={cardClasses} onClick={this.props.clickHandler}>
            {
                (this.props.card !== null) ? 
                <div style={{"textAlign": "center"}}>
                    <div className="card-name">{this.props.card.n} </div>
                    <div className="card-suit">{this.props.card.suit}</div> 
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default Card;  