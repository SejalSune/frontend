import React from "react";

function PricingSecond() {
  return (
    <div className="container pt-5 mb-7 border-bottom">
      <div className="row ps-5 pe-5">
        <div className="col text-center ps-5 pe-5">
          <img src="images\pricing0.svg" alt="img" className="h-50"/>
          <h2>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col text-center ps-5 pe-5">
          <img src="images\intradayTrades.svg" alt="img" className="h-50"/>
          <h2>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col text-center ps-5 pe-5">
          <img src="images\pricing0.svg" alt="img" className="h-50"/>
          <h2>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default PricingSecond;
