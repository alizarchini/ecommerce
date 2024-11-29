import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import headphone from "../images/headphone.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">PRODUCT</h4>
              <h4 className="cart-col-2">PRICE</h4>
              <h4 className="cart-col-3">QUANTITY</h4>
              <h4 className="cart-col-4">TOTAL</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={headphone} className="img-fluid" alt="product" />
                </div>
                <div className="w-75">
                  <p>he</p>
                  <p>Color: red</p>
                  <p>Size: large</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="size">$ 100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <FaTrashAlt className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="size">$ 100.00</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue to Shopping
              </Link>

              <div className="d-flex align-items-end flex-column">
                <h4>SubTotal: $ 100.00</h4>
                <p>Texes and shopping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
