// using sendgrid
import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
 
  const API = "http://localhost:8080/sendemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailinfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success");
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
          });
        } else {
          toast.success('Your email has been sent', {
            position: toast.POSITION.TOP_RIGHT,
          });
          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="contact-form">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="contact-form">
                  <label className="form-label">Job Types</label>
                  <select
                    name="jobtypes"
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div
                  className="button-submit"
                  onClick={sendemailinfo}
                >
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

export default Contact;


// using formspree
// import React, { useState } from "react";
// import axios from "axios";

// import "./Contact.css";
// import { RiSendPlaneFill } from "react-icons/ri";
// import Fade from "react-reveal";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     jobtypes: "",
//     message: "",
//   });

//   function handleChange(event) {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     sendEmail(formData);
//   }

//   function sendEmail(formData) {
//     // Set up the API endpoint URL
//     const url = "https://formspree.io/f/xpzeyqrb";
//     // Set up the HTTP headers
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     // Send the form data to the API endpoint using axios
//     axios
//       .post(url, formData, { headers })
//       .then((response) => {
//         console.log("Email sent:", response.data);
//         toast.success("Your email has been sent", {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         toast.error(toast.error, {
//           position: toast.POSITION.TOP_RIGHT,
//           draggable: true,
//         });
//       });
//   }

//   return (
//     <div className="container contact-section" id="contact">
//       <div className="row">
//         <Fade bottom>
//           <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
//             <div className="contact-form-image">
//               <img
//                 src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt=""
//               />
//             </div>
//           </div>
//         </Fade>
//         <Fade right>
//           <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
//             <div className="contact-form-design">
//               <div className="text-center">
//                 <h5>Contact Me</h5>
//               </div>
//               <form action="">
//                 <div className="contact-form">
//                   <label className="form-label">Name</label>
//                   <input
//                     name="name"
//                     type="text"
//                     className="form-control"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="contact-form">
//                   <label className="form-label">Email</label>
//                   <input
//                     name="email"
//                     type="text"
//                     className="form-control"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="contact-form">
//                   <label className="form-label">Job Types</label>
//                   <select
//                     name="jobtypes"
//                     className="custom-select-tag"
//                     value={formData.jobtypes}
//                     onChange={handleChange}
//                   >
//                     <option></option>

//                     <option>Part-time</option>

//                     <option>Full-time</option>
//                     <option>Working Student</option>
//                     <option>Contract</option>
//                   </select>
//                 </div>
//                 <div className="contact-form">
//                   <label className="form-label">Message</label>
//                   <textarea
//                     name="message"
//                     rows="4"
//                     type="text"
//                     className="form-control"
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="button-submit" onClick={handleSubmit}>
//                   <p>
//                     Send <RiSendPlaneFill size={20} />{" "}
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </Fade>
//       </div>
//       <ToastContainer autoClose={8000} />
//     </div>
//   );
// };

// export default Contact;


// using emailjs
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Form, Input, Button, message, Upload } from "antd";
// import { MdAttachFile } from "react-icons/md";

// const ContactForm = () => {
//   const [form] = Form.useForm();
//   const formRef = useRef(null);

//   const onFinish = (values) => {
//     const templateParams = {
//       to_email: "support@paramountstudent.network",
//       subject: values.subject,
//       message: values.message,
//       attachment: values.attachment ? values.attachment[0].originFileObj : null,
//     };

//     emailjs
//       .send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_USER_ID
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           message.success("Email sent successfully!");
//           form.resetFields();
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           message.error("Failed to send email.");
//         }
//       );
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//     message.error("Failed to send email. Please fill in all required fields.");
//   };

//   const normFile = (e) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e && e.fileList;
//   };

//   return (
//     <Form
//       form={form}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       ref={formRef}
//     >
     
//       <Form.Item
//         name="subject"
//         label="Subject"
//         rules={[{ required: true, message: "Please enter a subject" }]}
//       >
//         <Input placeholder="Enter the email subject" />
//       </Form.Item>
//       <Form.Item
//         name="message"
//         label="Message"
//         rules={[{ required: true, message: "Please enter a message" }]}
//       >
//         <Input.TextArea placeholder="Enter your message" rows={4} />
//       </Form.Item>
//       <Form.Item name="attachment" getValueFromEvent={normFile}>
//         <Upload>
//           <Button icon={<MdAttachFile />} size="large">
//             Attach File
//           </Button>
//         </Upload>
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default ContactForm;