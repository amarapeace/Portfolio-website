// using formspree
import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact1 = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobtypes: "",
    message: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendEmail(formData);
  }

  function sendEmail(formData) {
    // Set up the API endpoint URL
    const url = "https://formspree.io/f/xpzeyqrb";
    // Set up the HTTP headers
    const headers = {
      "Content-Type": "application/json",
    };

    // Send the form data to the API endpoint using axios
    axios
      .post(url, formData, { headers })
      .then((response) => {
        console.log("Email sent:", response.data);
        toast.success("Your email has been sent", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error(toast.error, {
          position: toast.POSITION.TOP_RIGHT,
          draggable: true,
        });
      });
  }

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img
                src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>
              <form action="">
                <div className="contact-form">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form">
                  <label className="form-label">Job Types</label>
                  <select
                    name="jobtypes"
                    className="custom-select-tag"
                    value={formData.jobtypes}
                    onChange={handleChange}
                  >
                    <option></option>

                    <option>Part-time</option>

                    <option>Full-time</option>
                    <option>Working Student</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div className="contact-form">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    type="text"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="button-submit" onClick={handleSubmit}>
                  <p>
                    Send <RiSendPlaneFill size={20} />{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact1;
