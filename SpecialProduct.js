import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct() {
  return (
    <>
      <div className="col-3">
        <div className="special-product-card">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src="images/tab1.jpg" className="img-fluid" alt="tab" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Samsung</h5>
              <h6 className="title">Samsung Galxy Tab 6</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ 520</span> &nbsp;
                <strike>$ 620</strike>
              </p>
              <div className="discount-till">
                <p>
                  <div className="d-flex gap-10 align-items-center">
                    <b>5 Days</b>
                    <span className="badge rounded-circle p-2 bg-info">01</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">05</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">04</span>
                  </div>
                </p>
                <div className="prod-count my-3">
                  <p>Products: 60</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <Link className="button mt-3">Add to cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="special-product-card">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src="images/tab1.jpg" className="img-fluid" alt="tab" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Samsung</h5>
              <h6 className="title">Samsung Galxy Tab 6</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ 520</span> &nbsp;
                <strike>$ 620</strike>
              </p>
              <div className="discount-till">
                <p>
                  <div className="d-flex gap-10 align-items-center">
                    <b>5 Days</b>
                    <span className="badge rounded-circle p-2 bg-info">01</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">05</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">04</span>
                  </div>
                </p>
                <div className="prod-count my-3">
                  <p>Products: 60</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <Link className="button mt-3">Add to cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="special-product-card">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src="images/w5.jpg" className="img-fluid" alt="tab" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Apple</h5>
              <h6 className="title">Apple Watch Series 9</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ 520</span> &nbsp;
                <strike>$ 620</strike>
              </p>
              <div className="discount-till">
                <p>
                  <div className="d-flex gap-10 align-items-center">
                    <b>5 Days</b>
                    <span className="badge rounded-circle p-2 bg-info">01</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">05</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">04</span>
                  </div>
                </p>
                <div className="prod-count my-3">
                  <p>Products: 60</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <Link className="button mt-3">Add to cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="special-product-card">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src="images/ipad1.png" className="img-fluid" alt="tab" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Apple</h5>
              <h6 className="title">ipad Air 4G</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ 520</span> &nbsp;
                <strike>$ 620</strike>
              </p>
              <div className="discount-till">
                <p>
                  <div className="d-flex gap-10 align-items-center">
                    <b>5 Days</b>
                    <span className="badge rounded-circle p-2 bg-info">01</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">05</span>
                    :
                    <span className="badge rounded-circle p-2 bg-info">04</span>
                  </div>
                </p>
                <div className="prod-count my-3">
                  <p>Products: 60</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <Link className="button mt-3">Add to cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProduct;
