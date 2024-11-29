import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />

                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                  />

                  <CustomInput type="email" name="email" placeholder="Email" />

                  <CustomInput
                    className="mt-1"
                    type="password"
                    name="password"
                    placeholder="password"
                  />

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Create</button>
                      <Link className="text-center text-primary">
                        Already have an account?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
