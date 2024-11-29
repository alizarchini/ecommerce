import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const WishList = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/w5.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title text-center">Apple Watch</h5>
                  <h6 className="price text-center">399 BDT</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image bg-white">
                  <img
                    src="images/ii.png"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title text-center">ipad Pro</h5>
                  <h6 className="price text-center">502 BDT</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/acc.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title text-center">TWS PRO 3</h5>
                  <h6 className="price text-center">501 BDT</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/speaker.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title text-center">Wireless Speaker</h5>
                  <h6 className="price text-center">400 BDT</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image mt-4">
                  <img
                    src="images/tab3.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="bg-white px-2 py-3">
                  <h5 className="title text-center">TAB 3</h5>
                  <h6 className="price text-center">403 BDT</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
