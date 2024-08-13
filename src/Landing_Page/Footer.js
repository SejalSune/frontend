import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FBFBFB" }} className="border-top mt-5">
      <div className="container mt-3 pt-2">
        <div className="row">
          <div className="col-3">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h4>
                  <img
                    src="images\logo.svg"
                    alt="logo"
                    style={{ height: "15px" }}
                  />
                </h4>
              </li>
              <li style={{fontSize:"15px"}}>© 2010 - 2024, Zerodha Broking Ltd.</li>
              <li style={{fontSize:"15px"}}>All rights reserved.</li>
              <li>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                &nbsp;&nbsp;&nbsp;
                <i class="fa fa-facebook" aria-hidden="true"></i>
                &nbsp;&nbsp;&nbsp;
                <i class="fa fa-instagram" aria-hidden="true"></i>
                &nbsp;&nbsp;&nbsp;
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul style={{ listStyleType: "none", fontSize:"13px" }}>
              <li class="fs-5">Company</li>
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Referral programmer</li>
              <li>Careers</li>
              <li>Zerodha.tech</li>
              <li>Press & media</li>
              <li>Zerodha Cares (CSR)</li>
            </ul>
          </div>
          <div className="col-3">
            <ul style={{ listStyleType: "none", fontSize:"13px"}}>
              <li class="fs-5">Support</li>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>Z-Connect blog</li>
              <li>List of charges</li>
              <li>Downloads & resources</li>
              <li>Videos</li>
              <li>Market overview</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
            </ul>
          </div>
          <div className="col-3">
            <ul style={{ listStyleType: "none", fontSize:"13px" }}>
              <li class="fs-5">Account</li>
              <li>Open an Account</li>
              <li>Fund Transfer</li>
            </ul>
          </div>
        </div>
        <div className=" text-muted" style={{ fontSize: "10.5px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES Register on SCORES
            portal, Mandatory detalls for filing comptants on SCORES Name, PAN,
            Address, Mobile Number, E-mail ID Besive Commancaмon, Speedy resal
            of the grevences
          </p>
          <p>Smart Online Dispute Resolution Grievances Redressal Mechanism</p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1 Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2 Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge. 3 Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around ms-5 me-5 pb-3">
        <span></span>
        <span></span>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">NSE</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">BSE</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">MCX</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">Terms & Condition</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">Policies & Procedure</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">Privacy policy</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">Disclosure</a>
        <a style={{fontSize:"12px", textDecoration:"none"}} href="/">Investor charter</a>
        <span></span>
        <span></span>
      </div>
    </footer>
  );
}

export default Footer;
