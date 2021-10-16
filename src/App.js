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
    // this.isButtonDisabledFunction = this.isButtonDisabledFunction.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      // cardAttr4: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // deleteButton: true,
      customCard: [],
      // onInputChange: () => {},
      // onSaveButtonClick: () => {},
      // }
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'cardTrunfo' || name === 'filterTrunfo') {
      const { checked } = target;
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value },
        () => {
          this.isButtonDisabledFunction();
        });
    }
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      // cardAttr4,
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
      // cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
    });

    // console.log('antes', customCard);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      // cardAttr4: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      // hasTrunfo: true,
    });
    // this.setState({ hasTrunfo: cardTrunfo === false });
    if (cardTrunfo) this.setState({ hasTrunfo: true, cardTrunfo: false });
  }

  onDeleteButtonClick(event) {
    const {
      cardTrunfo,
    } = this.state;
    // console.log(event.target.parentNode.parentNode);
    if (cardTrunfo === false) this.setState({ hasTrunfo: false });
    event.target.parentNode.remove();
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

      if (!cardAttr1 || !cardAttr2 || !cardAttr3) {
        this.setState({ isSaveButtonDisabled: true });
      }

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
      // cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      customCard,
      // deleteButton,
      // onInputChange,
      // onSaveButtonClick,
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
            // cardAttr4={ cardAttr4 }
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
            // cardAttr4={ cardAttr4 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            hasTrunfo={ hasTrunfo }
            cardTrunfo={ cardTrunfo }
          />
          <div className="deck-div">
            {customCard.map((elem) => (
              <div key={ elem.cardName }>
                <Card
                  cardName={ elem.cardName }
                  cardDescription={ elem.cardDescription }
                  cardAttr1={ elem.cardAttr1 }
                  cardAttr2={ elem.cardAttr2 }
                  cardAttr3={ elem.cardAttr3 }
                  // cardAttr4={ elem.cardAttr4 }
                  cardImage={ elem.cardImage }
                  cardRare={ elem.cardRare }
                  hasTrunfo={ elem.hasTrunfo }
                  cardTrunfo={ elem.cardTrunfo }
                  // deleteButton={ deleteButton }
                  // deleteFunction={ this.onDeleteButtonClick }
                />
                <button
                  type="submit"
                  data-testid="delete-button"
                  onClick={ this.onDeleteButtonClick }
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* {console.log('final da div', this.customCard, this.state)} */}
      </div>
    );
  }
}

export default App;
