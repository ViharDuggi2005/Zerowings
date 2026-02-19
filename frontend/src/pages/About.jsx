import { useState } from "react";
import facade2 from "../assets/images/facade2.png";
import missionIcon from "../assets/icons/mission.png";
import visionIcon from "../assets/icons/vision.png";

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section
        className="page-header"
        style={{ backgroundImage: `url(${facade2})` }}
      >
        <h1>Zerowings Aerospace</h1>
        <p>
          Eliminating Human Risk in Hazardous Environments Through Intelligent
          Aerial Systems
        </p>
      </section>

      {/* Who We Are & What We Do Section */}
      <section className="about-section who-what-section">
        <div className="about-content">
          <div className="who-we-are">
            <div className="section-header">
              <h2>Who We Are</h2>
              <div className="header-underline"></div>
            </div>
            <p>
              Zerowings Aerospace is a technology-driven aerospace company
              dedicated to the development of indigenous unmanned aerial
              systems. Our work centers on solving practical operational
              challenges—particularly where traditional methods expose people to
              risk, require significant time, or limit efficiency.
            </p>
            <p>
              We approach engineering with discipline and clarity, combining
              mechanical design, electronics, control systems, and software to
              create aerial platforms that organizations can depend on in
              demanding environments.
            </p>
          </div>

          <div className="what-we-do">
            <div className="section-header">
              <h2>What We Do</h2>
              <div className="header-underline"></div>
            </div>
            <p>
              We design and manufacture drone platforms that support inspection,
              maintenance, monitoring, and operational planning across multiple
              sectors. Each system is developed through structured engineering
              processes, controlled testing, and iterative improvement to ensure
              predictable performance in the field.
            </p>
            <p>Our areas of work include:</p>
            <ul className="services-list">
              <li>Industrial and infrastructure operations</li>
              <li>Renewable energy assets</li>
              <li>Maritime environments</li>
              <li>Security and surveillance support</li>
              <li>Defence-aligned applications</li>
            </ul>
            <p>
              The emphasis is not only on flight capability, but on delivering
              useful, repeatable outcomes for operators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section mission-vision-section">
        <div className="about-content">
          <div className="section-header">
            <h2>Our Mission & Vision</h2>
            <div className="header-underline"></div>
          </div>

          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <img src={missionIcon} alt="Mission" />
              </div>
              <h3>Our Mission</h3>
              <p>
                Zerowings Aerospace is an early-stage deeptech startup building
                industrial-grade drones for high-risk jobs. Founded with the
                mission to eliminate human risk in hazardous environments, we
                engineer intelligent aerial systems that combine robust
                hardware, precision control, and mission adaptability.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-icon">
                <img src={visionIcon} alt="Vision" />
              </div>
              <h3>Our Vision</h3>
              <p>
                Become India's go-to provider for industrial drone automation.
                Starting with infrastructure cleaning and expanding into
                multi-role applications, we're committed to reshaping how
                industries handle risky, repetitive, and dirty
                jobs—autonomously, affordably, and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section values-section">
        <div className="about-content">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="header-underline"></div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>In-House Engineering</h3>
              <p>
                Complete control over design, manufacturing, and quality ensures
                optimal performance and reliability
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Cost-Effective Innovation</h3>
              <p>
                Building advanced solutions with affordable manufacturing and
                deployment strategies
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>
                Redundant systems and rigorous testing ensure operation in the
                most hazardous environments
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📋</div>
              <h3>Regulatory Compliance</h3>
              <p>
                Full compliance with Indian drone regulations and international
                safety standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="about-section presence-section">
        <div className="about-content">
          <div className="section-header">
            <h2>Our Presence</h2>
            <div className="header-underline"></div>
          </div>

          <div className="presence-grid">
            <div className="presence-card">
              <h3>📍 Primary Base</h3>
              <p>
                <strong>SIEMENS Center of Excellence, NIT Trichy </strong> - Our
                headquarters and primary engineering center where innovation
                happens
              </p>
            </div>

            <div className="presence-card">
              <h3>🏢 Operational Hub</h3>
              <p>
                <strong>Maker Village, Kochi</strong> - Asia's largest
                electronics incubator hosting our operational presence
              </p>
            </div>
          </div>

          <div className="presence-content">
            <p>
              We have begun actively engaging with early customers and investors
              as we prepare for scaled deployment across India and beyond. Our
              distributed presence enables us to serve diverse industrial
              verticals while maintaining our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Operations?</h2>
          <p>
            Join us in revolutionizing industrial automation and eliminating
            human risk in hazardous environments
          </p>
          <button className="cta-button">Explore Our Solutions</button>
        </div>
      </section>
    </div>
  );
}
