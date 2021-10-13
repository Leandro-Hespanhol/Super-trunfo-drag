import React, { Component } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form-div">
        <label htmlFor="nome-da-carta">
          {' '}
          Nome
          <input
            type="text"
            name="cardName"
            value={ cardName }
            id="nome-da-carta"
            data-testid="name-input"
            className="form-control"
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="descricao-da-carta">
          {' '}
          Descrição
          <textarea
            name="cardDescription"
            id="descricao-da-carta"
            value={ cardDescription }
            cols="30"
            rows="10"
            data-testid="description-input"
            className="form-control"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Attr01">
          {' '}
          Charisma:
          <input
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            id="Attr01"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Attr02">
          {' '}
          Uniqueness:
          <input
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            id="Attr02"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Attr03">
          {' '}
          Nerve:
          <input
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            id="Attr03"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Attr04">
          {' '}
          Talent:
          <input
            type="number"
            name="cardAttr4"
            value={ cardAttr4 }
            id="Attr04"
            data-testid="attr4-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image">
          {' '}
          Image
          <input
            type="text"
            id="card-image"
            value={ cardImage }
            name="cardImage"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-selection">
          {' '}
          Rarity
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            id="rare-selection"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="joker-card">
          <input
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            id="joker-card"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <div>
          <button
            type="submit"
            name="save-button"
            className="btn btn-primary"
            data-testid="save-button"
            id="save-button"
            disabled={
              (!cardName
                || !cardDescription
                || !cardAttr1
                || !cardAttr2
                || !cardAttr3
                || !cardAttr4
                || !cardImage) ? isSaveButtonDisabled : false
            }
            onClick={ onSaveButtonClick }
          >
            Save
          </button>
        </div>
        <div>{hasTrunfo}</div>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr4: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
