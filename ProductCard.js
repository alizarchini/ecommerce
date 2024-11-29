import React from "react";
import ReactStars from "react-rating-stars-component";
import { LuRefreshCw } from "react-icons/lu";
import { BsEyeSlash, BsHeart, BsFillCartPlusFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <BsHeart className="text-dark" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              alt="watch"
              className="img-fluid w-100"
            />
            <img src="images/sam11.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="product-details mt">
            <h6 className="brand mt">Apple Watch</h6>
            <h5 className="product-title">
              The best smart watch in the market. More than 50 features just in
              100mm
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="description">
              at vero eos at accusatus et iusto edio dignissimos duciuns quit
              blandtlis proesntion vologtatun, at vero eos at accusatus et iusto
              edio dignissimos duciuns quit blandtlis proesntion vologtatun
            </p>
            <p className="price">$999.99</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link className="d-flex flex-column text-dark gap-30">
                <BsEyeSlash />
                <LuRefreshCw />
                <BsFillCartPlusFill />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
        <Link to="product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <BsHeart className="text-dark" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch11.webp"
              alt="watch"
              className="img-fluid w-100"
            />
            <img src="images/w.avif" alt="watch" className="img-fluid" />
          </div>
          <div className="product-details mt">
            <h6 className="brand mt">Apple Watch</h6>
            <h5 className="product-title">
              The best smart watch in the market. More than 50 features just in
              100mm
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="description">
              at vero eos at accusatus et iusto edio dignissimos duciuns quit
              blandtlis proesntion vologtatun, at vero eos at accusatus et iusto
              edio dignissimos duciuns quit blandtlis proesntion vologtatun
            </p>
            <p className="price">$999.99</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link className="d-flex flex-column text-dark gap-30">
                <BsEyeSlash />
                <LuRefreshCw />
                <BsFillCartPlusFill />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
        <Link to="product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <BsHeart className="text-dark" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/tab1.jpg"
              alt="watch"
              className="img-fluid w-100"
            />
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="product-details mt">
            <h6 className="brand mt">Apple Watch</h6>
            <h5 className="product-title">
              The best smart watch in the market. More than 50 features just in
              100mm
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="description">
              at vero eos at accusatus et iusto edio dignissimos duciuns quit
              blandtlis proesntion vologtatun, at vero eos at accusatus et iusto
              edio dignissimos duciuns quit blandtlis proesntion vologtatun
            </p>
            <p className="price">$999.99</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link className="d-flex flex-column text-dark gap-30">
                <BsEyeSlash />
                <LuRefreshCw />
                <BsFillCartPlusFill />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
        <Link to="product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <BsHeart className="text-dark" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/samsung1.webp"
              alt="watch"
              className="img-fluid w-100"
            />
            <img src="./images/tab1.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="product-details mt">
            <h6 className="brand mt">Apple Watch</h6>
            <h5 className="product-title">
              The best smart watch in the market. More than 50 features just in
              100mm
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="description">
              at vero eos at accusatus et iusto edio dignissimos duciuns quit
              blandtlis proesntion vologtatun, at vero eos at accusatus et iusto
              edio dignissimos duciuns quit blandtlis proesntion vologtatun
            </p>
            <p className="price">$999.99</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link className="d-flex flex-column text-dark gap-30">
                <BsEyeSlash />
                <LuRefreshCw />
                <BsFillCartPlusFill />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
