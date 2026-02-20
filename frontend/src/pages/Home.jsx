import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vtolImage from "../assets/products/vtol.png";
import dockImage from "../assets/products/dock.png";
import thermalImage from "../assets/products/thermal.png";
import facadeImage from "../assets/products/facade.png";
import miniVtolImage from "../assets/products/mini_vtol.png";
import miniDockImage from "../assets/products/mini_dock.png";
import miniThermalImage from "../assets/products/mini_thermal.png";
import miniFacadeImage from "../assets/products/mini_facade.png";
import background from "../assets/images/background.png";
import partnerImage from "../assets/images/partner1.png";
import partnerImage2 from "../assets/images/partner2.png";
import partnerImage3 from "../assets/images/partner3.png";
import partnerImage4 from "../assets/images/partner4.png";
import partnerImage5 from "../assets/images/partner5.png";
import partnerImage6 from "../assets/images/partner6.png";
import homeImage1 from "../assets/home/home1.png";
import homeImage2 from "../assets/home/home2.png";
import homeImage3 from "../assets/home/home3.png";
import homeImage4 from "../assets/home/home4.png";
import homeImage5 from "../assets/home/home5.png";
import homeImage6 from "../assets/home/home6.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const navigate = useNavigate();

  const galleryImages = [homeImage1, homeImage2, homeImage3, homeImage4];

  const galleryToProductMapping = [2, 5, 1, 3];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    {
      id: 1,
      name: "Moving Platform VTOL",
      bgName: "MARSV",
      description: "Autonomous Quadplane VTOL for Ship-Based Operations",
      image: isMobile ? miniVtolImage : vtolImage,
      tagline: "Autonomous Maritime VTOL System",
      overview:
        "An indigenous Indian prototype VTOL engineered for autonomous takeoff and landing on moving ships. Built for naval surveillance, emergency response, and maritime logistics in extreme sea conditions.",
      features: [
        "Autonomous VTOL takeoff & landing on moving ships",
        "GPS beacon-assisted recovery",
        "4K RGB + Thermal imaging",
        "Up to 20 km operational range",
        "EMI-resilient navigation system",
      ],
      specifications: {
        MTOW: "12 kg",
        Endurance: "Up to 2 hours",
        Payload: "3 kg",
        CruiseSpeed: "17–22 m/s",
        MaxAltitude: "3000 m",
        Structure: "Carbon-fiber airframe",
      },
      performanceText:
        "Engineered to operate in harsh maritime environments with high wind resistance and precise landing capability on dynamic platforms.",
      longDescription: `Autonomous Quadplane VTOL for Ship-Based Operations.

The Moving Platform VTOL is an indigenously developed Indian system engineered for autonomous takeoff and landing on moving ships. Designed to operate in RF-dense maritime environments, it enables persistent surveillance, emergency response, and lightweight cargo delivery from naval platforms.

Purpose-built for Navy, Coast Guard, Merchant Navy, and Port Authorities, the platform addresses the unique challenges of shipboard drone deployment — including deck motion, electromagnetic interference, limited takeoff space, and dynamic recovery conditions.

With autonomous ship landing capability, moving-baseline RTK yaw, EMI-resilient navigation, modular ISR payload support, and up to 2 hours endurance, the system delivers reliable maritime aerial operations.

Its carbon-fiber airframe, quadplane VTOL configuration, and rugged ground control ecosystem make it suitable for rapid maritime deployment.

The program is currently in prototype stage and aligns with India's vision for self-reliant aerospace and defence technologies.`,
    },
    {
      id: 2,
      name: "Zerowings Dock",
      bgName: "DRONE IN A BOX",
      description: "Autonomous Drone-in-a-Box System",
      image: isMobile ? miniDockImage : dockImage,
      tagline: "Autonomous Drone-in-a-Box Infrastructure",
      overview:
        "Zerowings Dock is a fully autonomous Drone-in-a-Box system engineered for 24×7 remote operations. Designed for industrial and security deployments, it enables scheduled missions, automated battery swaps, and continuous readiness without on-site pilots.",
      features: [
        "Automated battery swap mechanism",
        "Fully autonomous takeoff & landing",
        "Remote mission control from anywhere",
        "Secure encrypted data transmission",
        "Weather-resistant industrial enclosure",
        "Multi-site deployment capability",
      ],
      specifications: {
        PayloadCapacity: "Up to 2 kg",
        OperationMode: "Fully Autonomous",
        BatterySystem: "Automated Swap Dock",
        Connectivity: "Ethernet + Cellular",
        DeploymentType: "Fixed Infrastructure",
        UseCases: "Security, Inspection, Emergency Response",
      },
      performanceText:
        "Built for continuous operations in industrial environments, Zerowings Dock ensures uninterrupted aerial monitoring with minimal human intervention — delivering reliability, scalability, and enterprise-grade uptime.",
    },
    {
      id: 3,
      name: "Thermal Inspection Drone",
      bgName: "THERMAL DRONE",
      description: "Advanced Thermal Imaging for Enhanced Surveillance",
      image: isMobile ? miniThermalImage : thermalImage,
      tagline: "Thermal Imaging Inspection System",
      overview:
        "Advanced drone equipped with thermal imaging for infrastructure inspection, predictive maintenance, and surveillance in industrial environments.",
      features: [
        "High-resolution thermal imaging",
        "360° panoramic capture",
        "Real-time temperature monitoring",
        "Autonomous mission planning",
        "Extended range surveillance",
      ],
      specifications: {
        ThermalResolution: "320x256 @ 60Hz",
        RGBCamera: "4K UHD",
        Endurance: "Up to 45 minutes",
        Range: "5 km",
        MaxAltitude: "4000 m",
        SensorType: "Uncooled Thermal",
      },
      performanceText:
        "Designed for infrastructure assessment, the thermal inspection drone provides accurate temperature mapping for diagnostics, maintenance planning, and emergency response operations.",
    },
    /*{
      id: 4,
      name: "ZW SolarWash",
      bgName: "ZW SOLARWASH",
      description: "Autonomous Drone Cleaning System for Solar Panels",
      image: facadeImage,
      tagline: "Autonomous Solar Panel Cleaning Solution",
      overview:
        "Water-efficient drone cleaning system designed to maintain optimal solar panel output with minimal water consumption and zero structural damage.",
      features: [
        "Precision water mist spray system",
        "Thermal spot detection",
        "Large area coverage per mission",
        "Autonomous route planning",
        "Recyclable water collection",
      ],
      specifications: {
        WaterUsage: "0.5 L per 100 m²",
        CoveragePM: "500 m² per mission",
        Endurance: "30 minutes",
        PayloadCapacity: "2 kg water tank",
        OperatingTemperature: "-10°C to 50°C",
        SystemType: "Autonomous",
      },
      performanceText:
        "Optimized for solar farm operations, ZW SolarWash improves energy output by maintaining panel cleanliness while reducing operational costs through autonomous scheduling.",
    },*/
    {
      id: 5,
      name: "Facade Cleaning Drone",
      bgName: "ZW SKYWASH",
      description: "Autonomous Drone Cleaning System for Building Facades",
      image: isMobile ? miniFacadeImage : facadeImage,
      tagline: "High-Altitude Building Cleaning System",
      overview:
        "Autonomous facade cleaning system for high-rise buildings using advanced pressure technology and stabilized arms for precise surface cleaning without scaffolding.",
      features: [
        "Adjustable pressure nozzles",
        "Stabilized cleaning arm",
        "High-altitude capability",
        "Real-time navigation",
        "Safety-focused design",
      ],
      specifications: {
        MaxAltitude: "150 m",
        PressureRange: "50-100 bar",
        CoveragePM: "200 m² per hour",
        Endurance: "45 minutes",
        PayloadCapacity: "3 kg",
        CoverageArea: "Up to 15 story buildings",
      },
      performanceText:
        "Built for urban environments, the Facade Cleaning Drone eliminates the need for dangerous scaffolding operations while delivering consistent, efficient cleaning of building exteriors.",
    },
  ];

  const partnerships = [
    {
      id: 1,
      category: "Central Government",
      name: "MeitY",
      description:
        "Digital India initiatives and technology development support",
      image: partnerImage,
    },
    {
      id: 2,
      category: "Central Government",
      name: "DST",
      description: "Science and technology research funding and development",
      image: partnerImage2,
    },
    {
      id: 3,
      category: "Government Program",
      name: "NIDHI PRAYAS",
      description: "Early-stage technology development and startup support",
      image: partnerImage3,
    },
    {
      id: 4,
      category: "Innovation Hub",
      name: "Maker Village",
      description: "Asia's largest electronics incubator and startup ecosystem",
      image: partnerImage4,
    },
    {
      id: 5,
      category: "State Initiative",
      name: "KSUM",
      description: "Startup ecosystem development and pilot project validation",
      image: partnerImage5,
    },
    {
      id: 6,
      category: "State Initiative",
      name: "Startup TN",
      description: "Tamil Nadu's startup ecosystem enabling policy support",
      image: partnerImage6,
    },
  ];

  useEffect(() => {
    // No auto-scroll needed, CSS handles it
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="home-container">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-background">{currentProduct.bgName}</div>
        <div
          className="hero-content"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <div
            className="drone-image"
            data-product-id={currentProduct.id}
            onClick={() => navigate(`/products/${currentProduct.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="drone-placeholder"
            />
          </div>
          <h1 className="product-title">{currentProduct.name.toUpperCase()}</h1>
          <p className="product-description">{currentProduct.description}</p>
          <button
            className="buy-button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${currentProduct.id}`);
            }}
          >
            KNOW MORE
          </button>
        </div>

        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
        >
          ❮
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
        >
          ❯
        </button>

        <div className="carousel-indicators">
          {products.map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="gallery-grid-section">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-grid-item"
              onClick={() =>
                navigate(`/products/${galleryToProductMapping[index]}`)
              }
              style={{ cursor: "pointer" }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="partnerships-section">
        <div className="partnerships-header">
          <h2>
            Partnerships & <span className="highlight">Associations</span>
          </h2>
          <p>
            Building strong relationships with leading organizations to
            accelerate innovation
          </p>
        </div>

        <div className="partnership-carousel">
          <div className="partnership-carousel-content">
            {partnerships.map((partner) => (
              <div key={partner.id} className="partnership-card">
                <div className="partnership-logo">
                  <img src={partner.image} alt={partner.name} />
                </div>
                <div className="partnership-category">{partner.category}</div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
            {partnerships.map((partner) => (
              <div key={`${partner.id}-clone`} className="partnership-card">
                <div className="partnership-logo">
                  <img src={partner.image} alt={partner.name} />
                </div>
                <div className="partnership-category">{partner.category}</div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
