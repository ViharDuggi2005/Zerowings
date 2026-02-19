import "./About2.css";
import heroImage from "../assets/images/bg1.png";
import quoteImage from "../assets/images/facade1.png";
import missionIcon from "../assets/icons/mission.png";
import visionIcon from "../assets/icons/vision.png";

export default function About2() {
  return (
    <div className="about2-container">
      {/* Hero Section */}
      <section className="page-header">
        <h1>Our Story, Vision, and Values</h1>
        <p>
          Learn about our commitment to excellence, innovation, and the
          principles that guide our work every day.
        </p>
      </section>

      {/* Quote Section */}
      <section className="about2-quote-section">
        <div className="about2-quote-image">
          <img src={quoteImage} alt="Quote" />
        </div>
        <div className="about2-quote-content">
          <blockquote className="about2-quote-text">
            Our team of experts works tirelessly to bring your vision to life,
            ensuring every project we undertake not only meets but exceeds
            expectations. We are dedicated to transforming your ideas into
            impactful digital experiences that resonate with your audience and
            drive success.
          </blockquote>
        </div>
        <div className="about2-about-us-card">
          <div className="about2-card-header">
            <span className="about2-card-title">ABOUT US</span>
          </div>
          <div className="about2-card-content">
            <p>
              We believe in the power of collaboration and creativity. By
              partnering closely with our clients, we gain a deep understanding
              of their unique needs and goals, allowing us to deliver customized
              solutions that truly make a difference. Our holistic approach
              integrates design, technology, and strategy to create seamless and
              engaging digital experiences.
            </p>
            <p>
              By staying ahead of the curve and embracing the latest trends and
              technologies, we ensure that we provide cutting-edge solutions
              that not only address current challenges but also anticipate
              future opportunities. Let us help you navigate the digital
              landscape and achieve your business objectives with flair.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about2-mission-vision-section">
        <div className="about2-mission-vision-grid">
          <div className="about2-vision-card">
            <div className="about2-mv-header">
              <div className="about2-mv-icon">
                <img src={visionIcon} alt="Vision" />
              </div>
              <h3>VISION</h3>
            </div>
            <p>
              Become India's go-to provider for industrial drone automation.
              Starting with infrastructure cleaning and expanding into
              multi-role applications, we're committed to reshaping how
              industries handle risky, repetitive, and dirty jobs—autonomously,
              affordably, and safely.
            </p>
          </div>

          <div className="about2-mission-card">
            <div className="about2-mv-header">
              <div className="about2-mv-icon">
                <img src={missionIcon} alt="Mission" />
              </div>
              <h3>MISSION</h3>
            </div>
            <p>
              Zerowings Aerospace is an early-stage deeptech startup building
              industrial-grade drones for high-risk jobs. Founded with the
              mission to eliminate human risk in hazardous environments, we
              engineer intelligent aerial systems that combine robust hardware,
              precision control, and mission adaptability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
