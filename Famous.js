import React from "react";

function Famous() {
  return (
    <>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/w3.jpg" alt="famous-1" />
          <div className="famous-content position-absolute">
            <h5>Studio Display</h5>
            <h6>600 nits of brightness</h6>
            <p>27-inch 5k Retina display</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/f2.webp" alt="famous-1" />
          <div className="famous-content position-absolute">
            <h5>Smartphones</h5>
            <h6>iPhone 13 Pro.</h6>
            <p>159,000 BDT Only</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/f3.jpeg" alt="famous-1" />
          <div className="famous-content position-absolute">
            <h5>home speakers</h5>
            <h6>Room-filling sound</h6>
            <p>499 BDT Only</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/f4.webp" alt="famous-1" />
          <div className="famous-content position-absolute">
            <h5>Big Screen</h5>
            <h6>Smart Watch Series 7</h6>
            <p>2999 BDT Only</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Famous;
