import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

    render() {
        let cardClasses = "Card";
        let cardColor = "";
        let cardChar = null;
        if (this.props.card) {
        
            if (this.props.card.moveable && this.props.card.moveable.status) {
                cardClasses += " moveable";
            }
            //console.log(this.props.card);
            if (this.props.card.n !== "None") {
                if (this.props.card.faceUp) {
                    cardChar = String.fromCodePoint(parseInt(this.props.card.unicode, 16));
                    cardColor = this.props.card.color
                } else {
                    cardChar = String.fromCodePoint(0x1F0A0);
                }
            }
        }
            

        return (
            <div className={cardClasses} onClick={this.props.clickHandler}>
            {
                (this.props.card !== null) ? 
                <div className={cardColor}>
                    <div className="cardContent">
                        {cardChar}
                    </div>
                </div>

                :
                null
            }
            </div>
        );
    }
}

export default Card;  