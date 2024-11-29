import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { BsTelephone, BsHouse, BsInfoCircle, BsEnvelope } from "react-icons/bs";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1146.373697263073!2d51.34759573235407!3d35.641666118238795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1720450502755!5m2!1sen!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div className="col-12">
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="mail"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                    />
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
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>

              <div className="col-6">
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>

                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsHouse className="fs-5" />
                      <address className="mb-0">
                        Iran, Tehran, Sepideh Jonobi, No 10.
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15">
                      <BsTelephone className="fs-5" />
                      <a href="tel: +989361453542"> +989361453542</a>
                    </li>
                    <li className="mb-3 d-flex gap-15">
                      <BsEnvelope className="fs-5" />
                      <a href="mailto:ali.zarchini1367@gmail.com">
                        ali.zarchini1367@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
