import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BsArrowLeft className="fs-5" />
                  Go back to blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday morning Renaissance
                </h3>
                <img
                  src="https://nimboom.zarebin.ir/BNRfwiswBUif8lGz2t4_wA/4764998504/wp-content/uploads/2019/10/Virtual-reality-glasses-best.jpg?zb_svc=fajr-im-prod&zb_dmn=wedl.ir&zb_scm=https&zb_pl=0"
                  alt="blog"
                  className="img-fluid w-100 py-4"
                />
                <p>
                  You're only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury -
                  it's not something people need, but it's what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money. You're only as good as your last collection, which
                  is an enormous pressure. I think there is something about
                  luxury - it's not something people need, but it's what they
                  want. It really pulls at their heart. I have a fantastic
                  relationship with money. You're only as good as your last
                  collection, which is an enormous pressure. I think there is
                  something about luxury - it's not something people need, but
                  it's what they want. It really pulls at their heart. I have a
                  fantastic relationship with money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
