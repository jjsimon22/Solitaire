import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <div className="Card" onClick={this.props.clickHandler}>
            {
                this.props.card !== null ? 
                <div>
                    <h3>{this.props.card.n}</h3>
                    <h3>{this.props.card.suit}</h3> 
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default Card;  