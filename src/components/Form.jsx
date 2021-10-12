import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <main className="main-div">
        <label htmlFor="nome-da-carta">
          {' '}
          Nome
          <input
            type="text"
            name="nome"
            id="nome-da-carta"
            data-testid="name-input"
            className="form-control"
          />
        </label>
        <label htmlFor="descricao-da-carta">
          {' '}
          Descrição
          <textarea
            name=""
            id="descricao-da-carta"
            cols="30"
            rows="10"
            data-testid="description-input"
            className="form-control"
          />
        </label>
        <label htmlFor="Attr01">
          {' '}
          Attr01
          <input type="number" id="Attr01" data-testid="attr1-input" />
        </label>
        <label htmlFor="Attr02">
          {' '}
          Attr02
          <input type="number" id="Attr02" data-testid="attr2-input" />
        </label>
        <label htmlFor="Attr03">
          {' '}
          Attr03
          <input type="number" id="Attr03" data-testid="attr3-input" />
        </label>
        <label htmlFor="card-image">
          {' '}
          Image
          <input type="text" id="card-image" data-testid="image-input" />
        </label>
        <label htmlFor="rare-selection">
          <select data-testid="rare-input" id="rare-selection">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="joker-card">
          <input
            type="checkbox"
            name=""
            id="joker-card"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <button
          type="submit"
          className="btn btn-primary"
          data-testid="save-button"
          id="save-button"
        >
          Save
        </button>
      </main>
    );
  }
}

export default Form;
