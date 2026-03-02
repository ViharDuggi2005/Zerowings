// Knowledge base containing information about Zerowings products, services, and company

export const knowledgeBase = {
  company: {
    name: "Zerowings Aerospace",
    tagline: "Industrial Drone Automation Solutions",
    mission:
      "Zerowings Aerospace is an early-stage deeptech startup building industrial-grade drones for high-risk jobs. Founded with the mission to eliminate human risk in hazardous environments, we engineer intelligent aerial systems that combine robust hardware, precision control, and mission adaptability.",
    vision:
      "Become India's go-to provider for industrial drone automation. Starting with infrastructure cleaning and expanding into multi-role applications, we're committed to reshaping how industries handle risky, repetitive, and dirty jobs autonomously, affordably, and safely.",
    aboutUs:
      "We believe in the power of collaboration and creativity. By partnering closely with our clients, we gain a deep understanding of their unique needs and goals, allowing us to deliver customized solutions that truly make a difference. Our holistic approach integrates design, technology, and strategy to create seamless and engaging digital experiences. By staying ahead of the curve and embracing the latest trends and technologies, we ensure that we provide cutting-edge solutions that not only address current challenges but also anticipate future opportunities.",
    quote:
      "Our team of experts works tirelessly to bring your vision to life, ensuring every project we undertake not only meets but exceeds expectations. We are dedicated to transforming your ideas into impactful digital experiences that resonate with your audience and drive success.",
  },

  products: [
    {
      id: 1,
      name: "Moving Platform VTOL",
      brand: "Zerowings",
      category: "Maritime",
      description: "Autonomous Quadplane for Ship-Based Operations",
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
      name: "Zerowings Dock",
      brand: "Zerowings",
      category: "Automation",
      description: "Autonomous Drone-in-a-Box System",
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
      brand: "Zerowings",
      category: "Inspection",
      description: "Advanced Thermal Imaging for Enhanced Surveillance",
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
      name: "ZW SolarWash",
      brand: "Zerowings",
      category: "Cleaning",
      description: "Autonomous Drone Cleaning System for Solar Panels",
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
      name: "Facade Cleaning Drone",
      brand: "Zerowings",
      category: "Cleaning",
      description: "Autonomous Drone Cleaning System for Building Facades",
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
  ],

  services: {
    cleaning: {
      title: "Cleaning & Maintenance",
      description:
        "Precision drone-based cleaning solutions for industrial assets",
      services: [
        {
          id: 1,
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
          title: "Wind Turbine Maintenance",
          description:
            "Advanced drone-mounted tools for cleaning turbine blades, with integrated visual sensors for damage detection and fast turnaround maintenance.",
          features: ["Blade Cleaning", "Surface Mapping", "Fast Turnaround"],
          application: "Renewable Energy",
        },
        {
          id: 3,
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
  },

  contact: {
    address:
      "SIEMENS Center of Excellence, NIT Trichy, Tamil Nadu, India - 620015",
    email: "sales@zerowingsaero.com",
    phone: "+91 91504 02987",
    businessHours: {
      weekday: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 10:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
    },
  },

  store: {
    name: "Zerowings Store",
    description: "Premium aerospace systems and solutions",
    tagline: "Enterprise-grade drone solutions",
    storeProducts: [
      {
        id: 1,
        name: "Moving Platform VTOL",
        price: "₹35,00,000",
        description: "Autonomous Quadplane VTOL for Ship-Based Operations",
        category: "Systems",
        inStock: true,
      },
      {
        id: 2,
        name: "Zerowings Dock",
        price: "₹28,00,000",
        description: "Autonomous Drone-in-a-Box System",
        category: "Systems",
        inStock: true,
      },
      {
        id: 3,
        name: "Autonomous Thermal Inspection Drone",
        price: "₹22,00,000",
        description: "Advanced Thermal Imaging for Enhanced Surveillance",
        category: "Systems",
        inStock: true,
      },
      {
        id: 4,
        name: "ZW SolarWash",
        price: "₹19,00,000",
        description: "Autonomous Drone Cleaning System for Solar Panels",
        category: "Systems",
        inStock: true,
      },
      {
        id: 5,
        name: "Facade Cleaning Drone",
        price: "₹17,00,000",
        description: "Autonomous Drone Cleaning System for Building Facades",
        category: "Systems",
        inStock: true,
      },
    ],
    enterpriseSolutions:
      "For custom configurations, bulk orders, or enterprise licensing inquiries, please contact our sales team directly.",
  },
};

// Function to format knowledge base into a prompt string
export function getKnowledgeBaseContext() {
  let context =
    "You are Zerowings Aerospace chatbot assistant. You have detailed knowledge about our products, services, and company. ";
  context +=
    "Here is the information you should use to answer user queries:\n\n";

  context += "## COMPANY INFORMATION\n";
  context += `Company Name: ${knowledgeBase.company.name}\n`;
  context += `Tagline: ${knowledgeBase.company.tagline}\n`;
  context += `Mission: ${knowledgeBase.company.mission}\n`;
  context += `Vision: ${knowledgeBase.company.vision}\n`;
  context += `About Us: ${knowledgeBase.company.aboutUs}\n\n`;

  context += "## PRODUCTS\n";
  knowledgeBase.products.forEach((product) => {
    context += `\n### ${product.name}\n`;
    context += `Brand: ${product.brand}\n`;
    context += `Category: ${product.category}\n`;
    context += `Description: ${product.description}\n`;
    context += `Overview: ${product.overview}\n`;
    context += `Features: ${product.features.join(", ")}\n`;
    context += `Specifications: ${JSON.stringify(product.specifications)}\n`;
    context += `Performance: ${product.performanceText}\n`;
  });

  context += "\n## SERVICES\n";
  Object.entries(knowledgeBase.services).forEach(([key, category]) => {
    context += `\n### ${category.title}\n`;
    context += `${category.description}\n`;
    category.services.forEach((service) => {
      context += `\n#### ${service.title}\n`;
      context += `Description: ${service.description}\n`;
      context += `Features: ${service.features.join(", ")}\n`;
      context += `Application: ${service.application}\n`;
    });
  });

  context += "\n## STORE INFORMATION\n";
  context += `Store Name: ${knowledgeBase.store.name}\n`;
  context += `Description: ${knowledgeBase.store.description}\n`;
  context += `Enterprise Solutions: ${knowledgeBase.store.enterpriseSolutions}\n`;
  context += "\nAvailable Products:\n";
  knowledgeBase.store.storeProducts.forEach((product) => {
    context += `\n- ${product.name}: ${product.price} (${product.category})\n`;
    context += `  ${product.description}\n`;
    context += `  Stock: ${product.inStock ? "In Stock" : "Out of Stock"}\n`;
  });

  context += "\n## CONTACT INFORMATION\n";
  context += `Address: ${knowledgeBase.contact.address}\n`;
  context += `Email: ${knowledgeBase.contact.email}\n`;
  context += `Phone: ${knowledgeBase.contact.phone}\n`;
  context += `Business Hours:\n`;
  context += `  ${knowledgeBase.contact.businessHours.weekday}\n`;
  context += `  ${knowledgeBase.contact.businessHours.saturday}\n`;
  context += `  ${knowledgeBase.contact.businessHours.sunday}\n`;

  context +=
    "\n\nWhen answering questions, be helpful, accurate, and reference specific details from this knowledge base. If a user asks about something not in this knowledge base, let them know and suggest they contact us for more information.";

  return context;
}
