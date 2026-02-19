import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vtolImage from "../assets/products/vtol1.png";
import dockImage from "../assets/products/dock.png";
import thermalImage from "../assets/products/thermal.png";
import facadeImage from "../assets/products/facade.png";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [wishlist, setWishlist] = useState({});
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      brand: "Zerowings",
      name: "Moving Platform VTOL",
      description: "Autonomous Quadplane for Ship-Based Operations",
      category: "Maritime",
      price: 0,
      image: vtolImage,
      colors: ["black", "white"],
      inStock: true,
      specs: ["12 kg MTOW", "2 hours endurance", "3 kg payload"],
      rating: 5,
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
    },
    {
      id: 2,
      brand: "Zerowings",
      name: "Zerowings Dock",
      description: "Autonomous Drone-in-a-Box System",
      category: "Automation",
      price: 0,
      image: dockImage,
      colors: ["black", "gray"],
      inStock: true,
      specs: ["Automated battery swap", "2kg payload", "24×7 autonomous"],
      rating: 5,
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
      brand: "Zerowings",
      name: "Thermal Inspection Drone",
      description: "Advanced Thermal Imaging for Enhanced Surveillance",
      category: "Inspection",
      price: 0,
      image: thermalImage,
      colors: ["black", "white"],
      inStock: true,
      specs: ["Thermal imaging", "360° surveillance", "2 hours endurance"],
      rating: 5,
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
    {
      id: 4,
      brand: "Zerowings",
      name: "ZW SolarWash",
      description: "Autonomous Drone Cleaning System for Solar Panels",
      category: "Cleaning",
      price: 0,
      image: facadeImage,
      colors: ["white", "blue"],
      inStock: true,
      specs: ["Water-efficient spray", "High precision", "Large area coverage"],
      rating: 5,
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
    },
    {
      id: 5,
      brand: "Zerowings",
      name: "Facade Cleaning Drone",
      description: "Autonomous Drone Cleaning System for Building Facades",
      category: "Cleaning",
      price: 0,
      image: facadeImage,
      colors: ["black", "gray"],
      inStock: true,
      specs: ["Pressure nozzles", "Stabilized arms", "High-altitude capable"],
      rating: 5,
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

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="products-container">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover our complete range of innovative drones</p>
      </div>
      <section className="products-grid-section">
        <div className="products-grid">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card-new"
              onClick={() => navigate(`/products/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-card-image">
                <button
                  className={`wishlist-btn ${wishlist[product.id] ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  aria-label="Add to wishlist"
                >
                  {wishlist[product.id] ? "♥" : "♡"}
                </button>
                <div className="product-image-container">
                  {typeof product.image === "string" ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    product.image
                  )}
                </div>
              </div>
              <div className="product-card-details">
                <p className="product-brand">{product.brand}</p>
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-description">
                  {product.description}
                </p>
                <div className="product-card-buttons">
                  <button
                    className="product-btn contact-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/contact");
                    }}
                  >
                    Contact Us
                  </button>
                  <button
                    className="product-btn know-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
