import React, { Component, Fragment } from "react";
import { Router } from "react-router-dom";
import Crypto from "./components/Crypto";
import Stocks from "./components/Stocks";
import TopNews from "./components/TopNews";
import Weather from "./components/Weather";
import TimeDate from "./components/TimeDate";

class App extends Component {
  constructor() {
    super();
    this.state = { weatherCityModalOpen: false, cryptoModalOpen: false };
  }

  toggleCryptoModal = () => {
    const { cryptoModalOpen } = this.state;
    this.setState({ cryptoModalOpen: !cryptoModalOpen });
  };

  render() {
    const { weatherCityModalOpen, cryptoModalOpen } = this.state;

    return (
      <Router>
        <div
          className="inconsolata flex bg-black white absolute overflow-hidden col-12"
          style={{ height: "100vh" }}
        >
          <div className="flex-auto">
            <TimeDate />
            <Weather />
            <div className="flex">
              <TopNews />
              <Stocks />
            </div>
          </div>
          <Crypto toggleCryptoModal={this.toggleCryptoModal} />
          {cryptoModalOpen && (
            <div className="absolute col-12" style={{ height: "100%" }}>
              <div>
                <form>
                  <label>BTC</label>
                  <input type="text" name="btc" />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
