import { useState } from "react";
import locationIcon from "../assets/icons/location.png";
import emailIcon from "../assets/icons/email.png";
import phoneIcon from "../assets/icons/phone.png";
import hoursIcon from "../assets/icons/hours.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // 🔁 replace
        "YOUR_TEMPLATE_ID", // 🔁 replace
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY", // 🔁 replace
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };
  {
    submitStatus === "error" && (
      <div className="form-error-message">
        ❌ Something went wrong. Please try again.
      </div>
    );
  }

  return (
    <div className="contact-container">
      <section className="page-header">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We're here to help you reach new heights</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-wrapper">
          <div className="contact-info-card">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-group">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="info-icon"
                    />
                  </div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>
                      SIEMENS Center of Excellence, NIT Trichy, Tamil Nadu,
                      India - 620015
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <img src={emailIcon} alt="Email" className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:sales@zerowingsaero.com">
                        sales@zerowingsaero.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <img src={phoneIcon} alt="Phone" className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+919150402987">+91 91504 02987</a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <img
                      src={hoursIcon}
                      alt="Business Hours"
                      className="info-icon"
                    />
                  </div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            {submitStatus === "success" && (
              <div className="form-success-message">
                ✓ Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
