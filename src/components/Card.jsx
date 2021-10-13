import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="main-card-div">
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
        <h3 data-testid="name-card">{cardName}</h3>
        <img
          data-testid="image-card"
          className="card-image"
          src={ cardImage }
          alt={ cardName }
        />
        <h4 data-testid="description-card">{ cardDescription }</h4>
        <p data-testid="attr1-card">
          {`Charisma: ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card">{ `Uniqueness: ${cardAttr2}` }</p>
        <p data-testid="attr3-card">{ `Nerve: ${cardAttr3}` }</p>
        <p data-testid="attr4-card">{ `Talent: ${cardAttr4}` }</p>
        <footer data-testid="rare-card">{ `Tipo: ${cardRare}` }</footer>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr4: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
