import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardAttr4: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisable: true,
      // onInputChange: () => {},
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
      cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisable,
      // onInputChange,
      onSaveButtonClick,
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
            onSaveButtonClick={ onSaveButtonClick }
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
        </div>
      </div>
    );
  }
}

export default App;
