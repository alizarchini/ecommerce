import React from "react";
import { Link } from "react-router-dom";
import { LuBadgePercent } from "react-icons/lu";
import { BsTruck, BsGift, BsHeadset, BsWindowDock } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Famous from "../components/Famous";
import Container from "../components/Container";
import { services } from "../Utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active btn1"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  className="btn1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  className="btn1"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="main-banner position-relative">
                    <img
                      src="images/main-banner-1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>SUPERCHARGED FOR PROS.</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>From $999.00 or $41.62/mo</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="main-banner position-relative">
                    <img
                      src="images/baner2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>Fill the inside with music</h4>
                      <h5>Airpods Max Pro</h5>
                      <p>19,999 BDT Only</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="main-banner position-relative">
                    <img
                      src="images/baner3.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>DOnt't stop ever</h4>
                      <h5>MackBook Pro M1</h5>
                      <p>249,999 BDT Only</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/small1.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SAIL.</h4>
                  <h5>MackBook Pro</h5>
                  <p>355,000 BDT Only</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/small2.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>185,000 BDT Only</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/small3.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest brand & <br /> ultra low distortion.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/small4.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    Hight-fidelity playback & <br /> ultra low distortion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <section className="home-wrapper-2 py-5 mt-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="services d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <BsTruck className="fs-1" />
                    {/* <img
                      src="images/service1.jpg"
                      alt="services"
                      className="img-fluid"
                    /> */}

                    <div className="py-3 d-flex flex-column align-items-center justify-content-center">
                      <h6>Free Shipping</h6>
                      <p className="mb-0">From all orders over $100</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <BsGift className="fs-1" />
                    <div className="py-3 d-flex flex-column align-items-center justify-content-center">
                      <h6>Daily Surprise Offers</h6>
                      <p className="mb-0">Save up to 25% off 😲</p>
                    </div>
                  </div>

                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <BsHeadset className="fs-1" />
                    <div className="py-3 d-flex flex-column align-items-center justify-content-center">
                      <h6>Support 24/7</h6>
                      <p className="mb-0">Shop with an expert 🛍️</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <LuBadgePercent className="fs-1" />
                    <div className="py-3 d-flex flex-column align-items-center justify-content-center">
                      <h6>Afferdable Prices</h6>
                      <p className="mb-0">Get Factory Default Price</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <BsWindowDock className="fs-1" />
                    <div className="py-3 d-flex flex-column align-items-center justify-content-center">
                      <h6>Secure Payments</h6>
                      <p className="mb-0">100% Protected Payments ✅</p>
                    </div>
                  </div> 

                  {/* {services?.map((i, j) => {
                    return (
                      <div className="d-flex align-items-center gap-15" key={j}>
                        <img src={i.image} alt="" />
                        <div>
                          <h6>{i.title}</h6>
                          <p className="mb-0">{i.tagline}</p>
                        </div>
                      </div>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-5">Shop By Categories</h3>
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Speakers</h6>
                  <p>400 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="speaker" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>101 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="headphone" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptop</h6>
                  <p>200 Items</p>
                </div>
                <img src="images/Laptop.jpg" alt="laptop" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>TWS</h6>
                  <p>502 Items</p>
                </div>
                <img src="images/acc.jpg" alt="acc" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>TV</h6>
                  <p>404 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Watch</h6>
                  <p>202 Items</p>
                </div>
                <img src="images/watch-4.jpg" alt="watch" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Others</h6>
                  <p>402 Items</p>
                </div>
                <img src="images/homeapp.jpg" alt="homeapp" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="feature-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <h3 className="section-heading">Our Popular Products</h3>

          <Famous />
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>

      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand2" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand3" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand4" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand5" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand6" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand7" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
