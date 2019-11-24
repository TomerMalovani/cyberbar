import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Input from './components/input/input';
import DrinkGuide from './components/DrinkGuide/DrinkGuide';
import logo from './components/img/logo.png';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputVal: "",
      autoComplete: undefined,
      choosenDrink: undefined,
      sendDrink: undefined,
      DrinkIngredient: [],
      sendIngredient: []
    }
    this.debounce = this.debounce.bind(this);
    this.getAutoComplete = this.getAutoComplete.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }


  btnClick() {
    this.setState({
      inputVal: "",
      sendDrink: this.state.choosenDrink,
      sendIngredient: this.state.DrinkIngredient
    });
  }
  getIngredients(drink) {
    this.setState({ DrinkIngredient: [] });
    let Ingredients = [];
    console.log(this.state.DrinkIngredient);
    for (let i = 1; i < 15; i++) {
      let NewIngredient = drink["strIngredient" + i];
      let newAmount = drink["strMeasure" + i];
      if (NewIngredient !== null && newAmount !== null) {
        Ingredients.push({ Ingredient: NewIngredient, amount: newAmount });
      }
      else if (NewIngredient !== null) {
        Ingredients.push({ Ingredient: NewIngredient, amount: "see Instructions/use your logic -_-" });
      }
    }
    this.setState({
      DrinkIngredient: Ingredients
    })
  }

  showDrink(drink) {
    this.getIngredients(drink);
    this.setState({
      inputVal: drink.strDrink,
      choosenDrink: drink,
      autoComplete: undefined,
    })
  }

  debounce = (func, delay) => {
    let inDebounce
    return function () {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

  getAutoComplete() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.inputVal}`)
      .then(res => res.json()).then(data => {
        this.setState({ autoComplete: data.drinks })
      })
      .catch(function (err) {
        console.log("theres a error" + err);
      });
    if (this.state.inputVal === "") {
      this.setState({ autoComplete: undefined })
    }

  }

  InputChange(e) {
    this.setState({ inputVal: e.target.value });
    this.getAutoComplete();
  }


  render() {


    return (
      <Container className="body" fluid >
        <Input btnClick={this.btnClick} showDrink={(drink) => { this.showDrink(drink) }} autoComplete={this.state.autoComplete} changeInput={(e) => { this.InputChange(e) }} InputVal={this.state.inputVal} />
        <DrinkGuide Ingredients={this.state.sendIngredient} drink={this.state.sendDrink} />
        <div className="drinkimgBoxLogo">
          just because, go 3668
          <img className="Logo" src={logo} />
        </div>

      </Container >






    );

  }

}

export default App;
