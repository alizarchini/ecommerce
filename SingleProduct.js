import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { BsArrowRepeat, BsHeart } from "react-icons/bs";

const SingleProduct = () => {
  const props = {
    width: 500,
    height: 600,
    zoomWidth: 300,
    img: "https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false",
  };

  const [orderProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <ReactImageZoom {...props} />
              </div>

              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kides watch Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review"> (2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availablity:</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex gap-15 flex-wrap">
                      <span className="badge border rounded-0 border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border rounded-0 border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border rounded-0 border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border rounded-0 border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row  mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control rounded-0"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        ADD TO CART
                      </button>
                      <button className="button signup">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <BsHeart className="fs-5 me-2 text-dark" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <BsArrowRepeat className="fs-5 me-2 text-dark" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10  flex-column my-3">
                    <h3 className="product-heading">Shopping & Returns:</h3>
                    <p className="product-data">
                      Free shopping and returns available on all orders! <br />
                      We shop all US domestic orders wishin{" "}
                      <b>5-10 bussiness days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link:</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                          "https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=20&crop=false"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  pharetra tellus ut erat consequat auctor. Integer nulla nunc,
                  mollis ut volutpat eget, dictum ... Integer nulla nunc, mollis
                  ut volutpat eget, dictum ... Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Donec pharetra tellus ut erat
                  consequat auctor. Integer nulla nunc, mollis ut volutpat eget,
                  dictum ... Integer nulla nunc, mollis ut volutpat eget, dictum
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>

                  {orderProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                          <div className="d-flex gap-10 align-items-center">
                            <ReactStars
                              count={5}
                              size={24}
                              value="3"
                              edit={true}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols={36}
                        rows={4}
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pharetra tellus ut erat consequat auctor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default SingleProduct;
