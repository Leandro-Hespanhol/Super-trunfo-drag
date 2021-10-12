import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisable: false,
      onInputChange: () => {},
      onSaveButtonClick: () => {},
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      // isSaveButtonDisable,
      // onInputChange,
      // onSaveButtonClick,
    } = this.state;
    return (
      <main className="main-div">
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="Attr01">
          {' '}
          Attr01
          <input
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            id="Attr01"
            data-testid="attr1-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="Attr02">
          {' '}
          Attr02
          <input
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            id="Attr02"
            data-testid="attr2-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="Attr03">
          {' '}
          Attr03
          <input
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            id="Attr03"
            data-testid="attr3-input"
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
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
            value={ cardTrunfo }
            id="joker-card"
            data-testid="trunfo-input"
            onChange={ this.onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            data-testid="save-button"
            id="save-button"
          >
            Save
          </button>
        </div>
      </main>
    );
  }
}

export default Form;
