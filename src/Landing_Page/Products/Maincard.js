import React from "react";
import Card from "./Card";

function Universe() {
  return (
    <div className="container text-center">
      <h2 className="pb-3">The Zerodha Universe</h2>
      <p className="pb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="container">
        <div className="row mb-3">
          <div className="ps-5 pe-5 col">
            <Card
              img="images\streakLogo.png"
              para="Systematic trading platform that allows you to create and backtest strategies without coding"
            />
          </div>
          <div className="ps-5 pe-5 col">
            <Card
              img="images\smallcaseLogo.png"
              para="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
            />
          </div>
          <div className="ps-5 pe-5 col">
            <Card
              img="images\dittoLogo.png"
              para="Personalized advice on life and health insurance. No spam and no mis-selling."
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col ps-5 pe-5">
            <Card
              img="images\zerodhaFundhouse.png"
              para="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
            />
          </div>
          <div className="col ps-5 pe-5">
            <Card
              img="images\sensibullLogo.svg"
              para="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
            />
          </div>
          <div className="col ps-5 pe-5">
            <Card
              img="images\tijori.svg"
              para="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
            />
          </div>
        </div>
      </div>
      <button className='btn btn-primary'>Sign up Now</button>
    </div>
  );
}

export default Universe;
