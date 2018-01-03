import React, { Component } from 'react';
import '../assets/css/card.css'

 class Card extends Component {
    constructor(props){
        super(props);


        this.state = {
            currentRotation: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        this.setState({
            currentRotation: 180
        });

        this.props.flipCard();
    }

    render() {

        const { front, back } = this.props.card;

        return (
            <div style={ {transform: 'rotateY('+this.state.currentRotation+'deg)'} } className="card" onClick={this.handleClick}>
                <div className="front">
                    <img src={front}/>
                </div>
                <div className="back">
                    <img src={back}/>
                </div>
            </div>
        )
    }
}


export default Card