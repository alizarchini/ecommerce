import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img
            src="images/main-banner-1.jpg"
            alt="banner1"
            className="img-fluid w-100"
          />
          <div className="blog-content">
            <p className="date">TODAY</p>
            <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
            <p className="desc">
              You're Only Good As Your Last Collection. Which Is An Enormous
              Pressure. I think There Is Something About...
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="blog-card">
        <div className="card-image">
          <img src="images/small2.jpg" alt="banner1" className="img-fluid" />
          <div className="blog-content">
            <p className="date">TODAY</p>
            <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
            <p className="desc">
              You're Only Good As Your Last Collection. Which Is An Enormous
              Pressure. I think There Is Something About...
            </p>
            <Link to="/" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="card-image">
          <img src="images/baner2.jpg" alt="banner1" className="img-fluid" />
          <div className="blog-content">
            <p className="date">18 MARCH 2024</p>
            <h5 className="title">Refresh Your Mind By Music & Be Happy</h5>
            <p className="desc">
              Music Is The Only Thing That Can Chnage Someone's Thought In Just
              Few Seconds. Enjoy Listening The Music...
            </p>
            <Link to="/" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="card-image">
          <img src="images/small1.jpg" alt="banner1" className="img-fluid" />
          <div className="blog-content">
            <p className="date">YESTERDAY</p>
            <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
            <p className="desc">
              Only You Have The Rights To Choose The Best For You. Just Click
              Read More Button To Learn More About This...
            </p>
            <Link to="/" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BlogCard;
