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
      isSaveButtonDisable: true,
      deleteButton: true,
      customCard: [],
      // onInputChange: () => {},
      // onSaveButtonClick: () => {},
      // }
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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

    // console.log('antes', customCard);
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
      // hasTrunfo: true,
    });
    this.setState({ hasTrunfo: cardTrunfo === true });
  }

  onDeleteButtonClick(event) {
    // console.log(event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.remove();
    // this.setState({ hasTrunfo: cardTrunfo === true });
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
      isSaveButtonDisable,
      customCard,
      deleteButton,
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
            cardAttr4={ cardAttr4 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            hasTrunfo={ hasTrunfo }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisable }
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
          <div className="deck-div">
            {customCard.map((elem) => (<Card
              key={ elem.cardName }
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
              deleteButton={ deleteButton }
              deleteFunction={ this.onDeleteButtonClick }
            />))}
          </div>
        </div>
        {/* {console.log('final da div', this.customCard, this.state)} */}
      </div>
    );
  }
}

export default App;
