import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr4: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      customCard: [],
      filterByName: '',
      filterByRarity: 'todas',
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },
    () => {
      this.isButtonDisabledFunction();
    });
  }

  onSaveButtonClick() {
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
      customCard,
    } = this.state;

    customCard.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr4: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
    if (cardTrunfo) this.setState({ hasTrunfo: true, cardTrunfo: false });
  }

  onDeleteButtonClick({ target: { id } }) {
    const { customCard, cardTrunfo } = this.state;
    if (cardTrunfo === false) this.setState({ hasTrunfo: false });
    customCard.splice(id, 1);
    this.setState({
      customCard,
    });
  }

  isButtonDisabledFunction() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardImage,
      cardDescription,
      cardRare,
    } = this.state;
    if (cardName && cardImage && cardDescription && cardRare) {
      this.setState({ isSaveButtonDisabled: false });

      if (cardAttr1 < '0' || cardAttr2 < '0' || cardAttr3 < '0') {
        this.setState({ isSaveButtonDisabled: true });
      }

      if (cardAttr1 > '90' || cardAttr2 > '90' || cardAttr3 > '90') {
        this.setState({ isSaveButtonDisabled: true });
      }

      if (parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3) > '210') {
        this.setState({ isSaveButtonDisabled: true });
      }
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

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
      customCard,
      filterByName,
      filterByRarity,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="main-div">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardAttr4={ cardAttr4 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            hasTrunfo={ hasTrunfo }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardAttr4={ cardAttr4 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            hasTrunfo={ hasTrunfo }
            cardTrunfo={ cardTrunfo }
          />
          <div>
            <label htmlFor="filter-input" className="form-control">
              Filtros de Busca
              <input
                type="text"
                id="filter-input"
                name="filterByName"
                data-testid="name-filter"
                onChange={ this.onInputChange }
                className="form-control"
                placeholder="Digite o nome da carta"
              />
            </label>

            Raridade
            <select
              type="select"
              id="rare-filter-input"
              name="filterByRarity"
              data-testid="rare-filter"
              onChange={ this.onInputChange }
              className="form-control"
            >
              <option value="todas" selected>Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>

            <div className="deck-div">
              {customCard.filter((elem2) => RegExp(filterByName, 'i')
              // faz a função do includes e permite a busca independente do case sensitive
                .test(elem2.cardName))
                .filter((elem3) => elem3.cardRare === filterByRarity
                || filterByRarity === 'todas')
                .map((elem, index) => (
                  <div key={ elem.cardName }>
                    <Card
                      cardName={ elem.cardName }
                      cardDescription={ elem.cardDescription }
                      cardAttr1={ elem.cardAttr1 }
                      cardAttr2={ elem.cardAttr2 }
                      cardAttr3={ elem.cardAttr3 }
                      cardAttr4={ elem.cardAttr4 }
                      cardImage={ elem.cardImage }
                      cardRare={ elem.cardRare }
                      hasTrunfo={ elem.hasTrunfo }
                      cardTrunfo={ elem.cardTrunfo }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      name={ elem.cardName }
                      id={ index }
                      onClick={ this.onDeleteButtonClick }
                    >
                      Delete
                    </button>

                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
