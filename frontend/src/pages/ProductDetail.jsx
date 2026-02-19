import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetail.css";
import vtolImage from "../assets/products/vtol1.png";
import dockImage from "../assets/products/dock.png";
import thermalImage from "../assets/products/thermal.png";
import facadeImage from "../assets/products/facade.png";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const products = [
    {
      id: 1,
      name: "Moving Platform VTOL",
      tagline: "Autonomous Maritime VTOL System",
      heroImage: vtolImage,
      overview:
        "An indigenous Indian prototype VTOL system engineered for autonomous takeoff and landing on moving ships, enabling persistent maritime surveillance, emergency response, and lightweight cargo delivery in challenging naval environments. Designed for Navy, Coast Guard, Merchant Navy, and Port Authorities. Operating drones from ships introduces unique challenges: deck motion, electromagnetic interference, limited space, and dynamic recovery conditions. The Moving Platform VTOL is purpose-built to address these constraints with autonomous ship-landing capability, marker-based precision landing, and EMI-resilient navigation stack suitable for shipborne radar environments.",
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
        "The Moving Platform VTOL delivers reliable maritime aerial operations with autonomous VTOL takeoff and landing on moving ships using marker-based precision landing and GPS beacon-assisted recovery. Equipped with 3-axis stabilized gimbal, 4K RGB camera, and 640×512 thermal imaging, it enables persistent surveillance and emergency response with up to 2 hours endurance. The system supports fully autonomous missions including waypoint-based surveillance, orbit operations, and moving-ship takeoff/recovery with manual override available during all flight phases. With a 20 km operational range and EMI-resilient navigation, it reliably operates in RF-dense maritime environments while maintaining encrypted command and video links for secure communications.",
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
      tagline:
        "Autonomous drone operations. Always ready. Built for real missions.",
      heroImage: dockImage,
      overview:
        "Zerowings Dock is an all-weather, autonomous Drone-in-a-Box system designed for continuous remote operations. Powered by battery swap automation and a payload-ready drone platform, it enables high-uptime missions without on-site pilots. Designed for industrial and security deployments, it enables scheduled missions, automated battery swaps, and continuous readiness without on-site pilots. The system manages the complete mission lifecycle from takeoff to data delivery with enterprise-grade reliability.",
      features: [
        "24×7 autonomous readiness",
        "Battery Swap. Not Charging.",
        "Weather-resistant outdoor enclosure",
        "Modular payload swapping",
        "Remote operations from anywhere",
        "Secure encrypted data transmission",
      ],
      specifications: {
        SystemType: "Autonomous Drone-in-a-Box",
        BatterySwap: "Automated hot-swap mechanism",
        PayloadCapacity: "Up to 2 kg",
        Endurance: "45-60 minutes per battery",
        Connectivity: "Ethernet & cellular backup",
        Weatherproofing: "IP54 rated outdoor enclosure",
      },
      performanceText:
        "Zerowings Dock enables fully autonomous drone missions with launch, land, battery exchange, data upload, and repeat cycles without human intervention. When a mission is triggered, the system is ready instantly, not waiting to charge. Built for continuous operations in industrial environments, Zerowings Dock ensures uninterrupted aerial monitoring with minimal human intervention. Engineered for harsh, unattended environments with weather-resistant enclosure and integrated safety diagnostics for enterprise-grade uptime.",
      longDescription: `Autonomous Drone-in-a-Box for Continuous Operations

Zerowings Dock is an all-weather, autonomous Drone-in-a-Box system designed for continuous remote operations. Powered by battery swap automation and a payload-ready drone platform, it enables high-uptime missions without on-site pilots.

Security • Inspection • Mapping • Emergency Response

BUILT FOR REAL-WORLD OPERATIONS

Zerowings Dock enables fully autonomous drone missions: launch, land, battery exchange, data upload, and repeat, without human intervention.

• 24×7 autonomous readiness
• Remote operations from anywhere
• Predictable turnaround using battery swapping
• Designed for permanent outdoor deployment
• Operate drones like infrastructure, not equipment

BATTERY SWAP. NOT CHARGING.

Traditional drone docks rely on charging cycles that limit operational tempo. Zerowings Dock uses automated battery swapping, enabling:

• Faster mission turnaround
• Higher daily sortie availability
• Reduced battery thermal stress
• Consistent readiness for time-critical tasks

When a mission is triggered, the system is ready, not waiting to charge.

PAYLOAD-READY DRONE PLATFORM

Zerowings Dock supports a mission-focused drone platform optimized for stability, endurance, and modular payloads.

Swappable payload ecosystem:
• RGB visual imaging
• Thermal sensing
• Multispectral analysis
• Mapping and survey cameras
• Custom mission payloads

One dock. One drone platform. Multiple mission profiles.

AUTONOMOUS FROM LAUNCH TO DATA DELIVERY

Zerowings Dock manages the complete mission lifecycle:

• Automated takeoff and precision landing
• Scheduled and repeatable flight routes
• Battery exchange and health validation
• Secure data transfer and storage
• Automatic readiness for the next mission

Scale from a single site to fleet-level deployments.

RUGGED DOCK. OUTDOOR-READY.

Engineered for harsh, unattended environments:

• Weather-resistant enclosure
• Continuous internal and external monitoring
• Integrated safety and health diagnostics
• Dock-mounted cameras for remote visual checks
• Built for industrial facilities, campuses, solar farms, ports, highways, and critical infrastructure

BUILT-IN OPERATIONAL SAFETY

Every mission is governed by layered safety systems:

• Automated pre-flight system checks
• Environmental awareness (wind, rain, temperature)
• Abort and safe-return logic
• Full mission logging and audit trails
• Operations proceed only when conditions meet safety thresholds

REMOTE OPERATIONS DASHBOARD

Plan, execute, and review missions from anywhere.

• Mission scheduling and automation
• Live video streaming
• Event tagging and playback
• Activity logs and operational reports
• Role-based access for teams
• Designed for enterprise-grade remote operations

DEPLOY ONCE. SCALE EVERYWHERE.

Zerowings Dock is built for multi-site deployment:

• Standardized installation workflow
• Ethernet and cellular connectivity
• Centralized health and fleet monitoring
• Minimal on-site maintenance
• Ideal for organizations operating across distributed locations

USE CASES

Security & Surveillance: Automated perimeter patrols and incident verification.
Industrial Inspection: Routine inspections of towers, plants, yards, and assets.
Solar & Utilities: Thermal inspections and condition monitoring.
Emergency Response: Rapid situational awareness without pilot availability.
Mapping & Survey: Repeatable missions with mapping-grade payloads.

SPECIFICATIONS

Dock System:
• Autonomous Drone-in-a-Box platform
• Automated battery swap mechanism
• Outdoor-rated enclosure
• Integrated environmental and system monitoring
• Ethernet and cellular connectivity

Drone Platform:
• Large-prop multirotor architecture
• Payload capacity: up to 2 kg
• Modular, swappable payload interface
• Optimized for repeatable autonomous operations

Operations:
• Fully remote mission control
• Automated scheduling and execution
• Secure data handling and reporting

Ready to Automate Your Drone Operations?

Zerowings Dock delivers reliable, heavy-duty autonomy—built for continuous real-world missions.`,
    },
    {
      id: 3,
      name: "Thermal Inspection Drone",
      tagline: "Autonomous Thermal Inspection Drone",
      heroImage: thermalImage,
      overview:
        "An advanced multirotor quadcopter equipped with uncooled thermal imaging sensors for infrastructure inspection, predictive maintenance, and industrial surveillance. Features a foldable carbon-fiber airframe with integrated 3-axis gimbal stabilization for precise thermal and RGB imaging. Designed for manual, assisted, and fully autonomous mission planning with hot-swappable battery capability for extended operations. The platform delivers accurate temperature mapping and real-time diagnostics across demanding industrial environments and field deployments.",
      features: [
        "640×512 thermal resolution with 12µm pixel pitch",
        "4K RGB camera with 6× digital zoom and 3-axis gimbal",
        "60 minutes endurance with thermal payload",
        "Hot-swappable battery system",
        "Autonomous mission planning capability",
        "Maximum wind resistance Level 6",
      ],
      specifications: {
        Airframe: "Quadcopter, Carbon Fiber, Foldable",
        Dimensions: "650 mm wheelbase",
        Weight: "1.5 kg (empty)",
        "Payload Capacity": "Up to 2 kg",
        "Thermal Sensor": "Uncooled VOx, 640×512, 8-14µm",
        "Thermal Sensitivity": "≤ 50 mK (NETD)",
        "RGB Camera": "4K UHD with 3-axis gimbal",
        Endurance: "60 minutes (with thermal payload)",
        "Max Altitude": "120 m (regulatory)",
      },
      performanceText:
        "Built for continuous industrial inspection operations, the thermal drone delivers precise temperature mapping for predictive maintenance, asset monitoring, and emergency response. The uncooled thermal sensor with 50mK sensitivity enables accurate diagnostics across infrastructure inspections, electrical assessments, and surveillance applications. Engineered for harsh field conditions with Level 6 wind resistance and integrated vibration isolation, it maintains thermal accuracy in demanding environments. The autonomous mission planning capability combined with 60-minute endurance makes it ideal for large-scale infrastructure surveys and real-time thermal analysis.",
    },
    {
      id: 4,
      name: "ZW SolarWash",
      tagline: "Fully Autonomous Solar Panel Cleaning Drone",
      heroImage: facadeImage,
      overview:
        "ZW SolarWash is a fully autonomous hexacopter-based cleaning drone engineered for utility-scale ground-mounted solar farms with precision non-contact water spray technology. Powered by RTK-based centimeter-level positioning, it delivers systematic grid-based cleaning with terrain-following radar maintaining constant panel standoff distance. The system carries a 16-liter onboard tank with high-pressure pump capable of covering 200 m² per minute, cleaning approximately 1 acre in 30 minutes in autonomous mode. Equipped with 360° obstacle detection LiDAR and intelligent mission logic, it operates with zero structural damage risk while automatically resuming operations after battery or water refills.",
      features: [
        "Precision water mist spray system",
        "Terrain-following radar for constant standoff",
        "200 m² per minute coverage rate",
        "RTK-based centimeter-level positioning",
        "360° obstacle detection LiDAR",
        "Hot-swappable battery and water tank system",
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
        "ZW SolarWash delivers unmatched productivity for large-scale solar farm maintenance, covering approximately 1 acre every 30 minutes using fully autonomous RTK-based operations. The 16-liter onboard tank combined with 250 PSI high-pressure spray system removes soiling and dust without structural damage or excessive water consumption. Terrain-following radar maintains precise panel standoff distance while 360° obstacle detection ensures safe autonomous operation in complex farm layouts. Intelligent mission logic enables automatic resumption after battery or water refills, minimizing downtime and maximizing cleaning efficiency for utility-scale deployments.",
    },
    {
      id: 5,
      name: "Facade Cleaning Drone",
      tagline: "High-Altitude Building Cleaning System",
      heroImage: facadeImage,
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

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="product-page">
      {/* HERO SECTION */}
      <section className="product-hero">
        <div className="hero-content">
          <h1>{product.name}</h1>
          <p className="tagline">{product.tagline}</p>
          <button className="cta-button" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
        <img src={product.heroImage} alt={product.name} />
      </section>

      {/* FLOATING TAB SECTION */}
      <div className="floating-tab-section">
        <div className="product-tabs">
          {["overview", "features", "specifications", "performance"].map(
            (tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active-tab" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ),
          )}
        </div>

        <div className="tab-card">
          {activeTab === "overview" && (
            <div className="overview-section">
              <p>{product.overview}</p>
            </div>
          )}

          {activeTab === "features" && (
            <div className="features-section">
              <div className="features-grid">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      <span>{index + 1}</span>
                    </div>
                    <p className="feature-text">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="spec-bar-container">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div className="spec-bar-item" key={key}>
                  <p className="spec-bar-label">{key}</p>
                  <h2 className="spec-bar-value">{value}</h2>
                </div>
              ))}
            </div>
          )}

          {activeTab === "performance" && (
            <div className="performance-section">
              <p>{product.performanceText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
