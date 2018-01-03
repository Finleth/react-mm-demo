import React, { Component } from 'react';
import '../assets/css/app.css';
import cardData from '../assets/helpers/card_data';

import Card from './card';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: cardData
        };

        this.flipCard = this.flipCard.bind(this);
    }


    flipCard(index){

        let newCards = this.state.cards.slice();

        newCards[index].flipped = true;

        this.setState({
            cards: newCards
        });
    }



    render() {
        const jsxCards = this.state.cards.map( (card, index) => {
            return (
                <Card key={index}  flipCard={ this.flipCard.bind(this, index) } card={card}/>
            )
        });

        return (
            <div className="app">
                <h1>Memory Match</h1>
                <div className="game-container">
                    { jsxCards }
                </div>
            </div>
        )
    }
};

export default App;
