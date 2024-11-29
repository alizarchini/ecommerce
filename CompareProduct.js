import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="images/watch-4.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title text-center">
                  Honor T1 7.0 1GB RAM 8 GB Rom 7 Inch With Wi-fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3 text-center">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Huawei</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/tab3.jpg" alt="watch" className="img-fluid" />
              </div>
              <div className="compare-product-details">
                <h5 className="title text-center">TAB 9+</h5>
                <h6 className="price mb-4 mt-4 text-center">502 BDT</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Market</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="images/acc.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title text-center">TWS PRO 3</h5>
                <h6 className="price mb-4 mt-4 text-center">501 BDT</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Market</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>AirPods</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>Stock Out</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="images/speaker.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title text-center">Wireless Speaker</h5>
                <h6 className="price mb-4 mt-4 text-center">400 BDT</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>ATM</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Speaker</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 mt-4">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="images/tab1.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title text-center">TAB 3</h5>
                <h6 className="price mb-4 mt-4 text-center">403 BDT</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Market</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
