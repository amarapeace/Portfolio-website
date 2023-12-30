// using emailjs
import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Form, Input, Button, message, Upload } from "antd";
import { MdAttachFile } from "react-icons/md";

const Contact2 = () => {
  const [form] = Form.useForm();
  const formRef = useRef(null);

  const onFinish = (values) => {
    const templateParams = {
      to_email: "support@paramountstudent.network",
      subject: values.subject,
      message: values.message,
      attachment: values.attachment ? values.attachment[0].originFileObj : null,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          message.success("Email sent successfully!");
          form.resetFields();
        },
        (error) => {
          console.log("FAILED...", error);
          message.error("Failed to send email.");
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to send email. Please fill in all required fields.");
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      ref={formRef}
    >

      <Form.Item
        name="subject"
        label="Subject"
        rules={[{ required: true, message: "Please enter a subject" }]}
      >
        <Input placeholder="Enter the email subject" />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: "Please enter a message" }]}
      >
        <Input.TextArea placeholder="Enter your message" rows={4} />
      </Form.Item>
      <Form.Item name="attachment" getValueFromEvent={normFile}>
        <Upload>
          <Button icon={<MdAttachFile />} size="large">
            Attach File
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact2;
