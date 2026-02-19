import { useState } from "react";
import service1 from "../assets/services/service1.png";
import service2 from "../assets/services/service2.png";
import service3 from "../assets/services/service3.png";
import service4 from "../assets/services/service4.png";
import service5 from "../assets/services/service5.png";
import service6 from "../assets/services/service6.png";
import service7 from "../assets/services/service7.png";
import service8 from "../assets/services/service8.png";
export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("cleaning");

  const services = {
    cleaning: {
      title: "Cleaning & Maintenance",
      description:
        "Precision drone-based cleaning solutions for industrial assets",
      services: [
        {
          id: 1,
          icon: service1,
          title: "Building Facade Cleaning",
          description:
            "Precision drone cleaning services for building exteriors using pressure nozzles and stabilized arms to clean glass, concrete, and metal surfaces at heights without scaffolding.",
          features: [
            "Precision Cleaning",
            "Autonomous Navigation",
            "Performance Tracking",
          ],
          application: "Urban Infrastructure",
        },
        {
          id: 2,
          icon: service2,
          title: "Wind Turbine Maintenance",
          description:
            "Advanced drone-mounted tools for cleaning turbine blades, with integrated visual sensors for damage detection and fast turnaround maintenance.",
          features: ["Blade Cleaning", "Surface Mapping", "Fast Turnaround"],
          application: "Renewable Energy",
        },
        {
          id: 3,
          icon: service3,
          title: "Solar Panel Cleaning",
          description:
            "Water-efficient drone cleaning using fine water mist or soft jets to remove dust and maintain maximum panel output without causing damage, ideal for arid and coastal locations.",
          features: [
            "Water Efficient Spray",
            "Thermal Spot Detection",
            "Energy Optimization",
          ],
          application: "Renewable Energy",
        },
      ],
    },
    surveillance: {
      title: "Surveillance & Monitoring",
      description: "Advanced drone-based surveillance and monitoring solutions",
      services: [
        {
          id: 4,
          icon: service4,
          title: "Emergency Response & Surveillance",
          description:
            "Rapid drone deployment for emergency operations with thermal imaging and real-time situational awareness capabilities for disaster management and safety support.",
          features: [
            "Thermal Imaging",
            "Real-time Monitoring",
            "Rapid Response",
          ],
          application: "Emergency Services",
        },
        {
          id: 5,
          icon: service5,
          title: "Maritime Surveillance",
          description:
            "Comprehensive surveillance of coastal areas and maritime infrastructure with high-resolution imaging and long-range monitoring capabilities for security and environmental monitoring.",
          features: [
            "Long-range Monitoring",
            "High-resolution Imaging",
            "Security Patrols",
          ],
          application: "Maritime & Coastal",
        },
        {
          id: 6,
          icon: service6,
          title: "Infrastructure Monitoring",
          description:
            "Continuous monitoring of critical infrastructure including bridges, power lines, pipelines, and rail networks for structural integrity and maintenance planning.",
          features: [
            "Structural Assessment",
            "Damage Detection",
            "Predictive Maintenance",
          ],
          application: "Infrastructure",
        },
      ],
    },

    education: {
      title: "Education & Training",
      description: "Specialized training and educational programs",
      services: [
        {
          id: 7,
          icon: service7,
          title: "Young Aviators Lab",
          description:
            "Young Aviators Lab by Zerowings Aerospace is a structured, hands-on workshop that introduces school students to drones and aviation. Students build and fly real drones while learning core STEM concepts in a safe, supervised environment, fostering curiosity, practical skills, and early exposure to aerospace technology.",
          features: [
            "Hands-on Drone Building",
            "STEM Learning",
            "Safe Flight Operations",
          ],
          application: "Education & Skill Development",
        },
        {
          id: 8,
          icon: service8,
          title: "Professional Training Programs",
          description:
            "Comprehensive training for professionals in drone operations, maintenance, and applications across various industries with certification programs.",
          features: [
            "Certified Training",
            "Hands-on Practice",
            "Industry Standards",
          ],
          application: "Professional Development",
        },
      ],
    },
  };

  const categories = [
    { key: "cleaning", label: "Cleaning & Maintenance" },
    { key: "surveillance", label: "Surveillance & Monitoring" },
    { key: "education", label: "Education & Training" },
  ];

  const currentCategory = services[selectedCategory];

  return (
    <div className="services-container">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive drone solutions for diverse applications</p>
      </div>

      <div className="services-category-tabs">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`category-tab ${
              selectedCategory === category.key ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="services-category-section">
        <div className="category-header">
          <h2>{currentCategory.title}</h2>
          <p>{currentCategory.description}</p>
        </div>

        <div className="services-grid">
          {currentCategory.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-img"
                />
              </div>

              <div className="service-application">{service.application}</div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
