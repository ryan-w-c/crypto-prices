import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";


var coin = "BTC";
var action = "Buy";
var component;

const coins = ["BTC", "ETH"];
const actions = ["Buy", "Sell"];

const Button = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #ddd;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 0;
  background: coral;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;
  font-size: calc(5px + 2vmin);
  &:hover {
      height: 100px;
      width: 100px;
      font-size: calc(10px + 3vmin);
      transition: all 0.2s ease;
  }
`;

function clickCoin(newCoin) {
  if (coin !== newCoin) {
    coin = newCoin;
    component.clear();
  }
}

function CoinGroup() {
  const [active, setActive] = useState(coin);

  return (
    <div>
      {coins.map((coin) => (
        <div className="circles">
          <ButtonToggle active={active === coin} onClick={() => { setActive(coin); clickCoin(coin) }}>
            {coin}
          </ButtonToggle>
        </div>
      ))}
    </div>
  );
}

function clickAction(newAction) {
  if (action !== newAction) {
    action = newAction;
    component.clear();
  }
}

function ActionGroup() {
  const [active, setActive] = useState(action);

  return (
    <div>
      {actions.map((action) => (
        <div className="circles">
          <ButtonToggle active={active === action} onClick={() => { setActive(action); clickAction(action) }}>
            {action}
          </ButtonToggle>
        </div>
      ))}
    </div>
  );
}

const ButtonToggle = styled(Button)`
  background-color: coral;
  ${({ active }) =>
    active &&
    `
    font-size: calc(20px + 4vmin);
    height: 150px;
    width: 150px;
    background-color: #90EE90;
  `}
`;

function getURI(exchange) {
  return "/api/" + exchange + "/" + coin + "/" + action;
}


class App extends React.Component {
  constructor() {
    super();
    component = this;
    this.state = {
      coinbase: "",
      cex: "",
      message: ""
    }
  }

  clear() {
    this.fetchAPI("XX,XXX.XX", "XX,XXX.XX");
  }

  fetchAPI(price1, price2) {
    this.setState({
      coinbase: price1,
      cex: price2
    });
    fetch(getURI("coinbase"))
      .then(response => response.text())
      .then(text => {
        this.setState({
          coinbase: Number(text).toFixed(2)
        });
      });
    fetch(getURI("cex"))
      .then(response => response.text())
      .then(text => {
        this.setState({
          cex: Number(text).toFixed(2)
        });
        if (action === "Buy") {
          if (this.state.cex > this.state.coinbase) {
            this.setState({
              message: action + " " + coin + " at Coinbase"
            });
          }
          else {
            this.setState({
              message: action + " " + coin + " at CEX.io"
            });
          }
        }
        else {
          if (this.state.cex > this.state.coinbase) {
            this.setState({
              message: action + " " + coin + " at CEX.io"
            });
          }
          else {
            this.setState({
              message: action + " " + coin + " at Coinbase"
            });
          }
        }
      });
  }

  componentDidMount() {
    this.fetchAPI("XX,XXX.XX", "XX,XXX.XX");
    this.interval = setInterval(() => this.fetchAPI(this.state.coinbase, this.state.cex), 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CoinGroup />
          <ActionGroup />
          <h1>{this.state.message}</h1>
          <div>
            <h1 className="">Coinbase: ${this.state.coinbase}</h1>
            <h1 className="App-title">CEX.io: ${this.state.cex}</h1>
          </div>
        </header>
      </div>
    )
  }
}

export default App;