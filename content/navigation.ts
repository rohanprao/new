export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  href?: string;
  items?: MegaMenuItem[];
  featured?: {
    title: string;
    description: string;
    href: string;
    tag: string;
  };
}

export const navigationData: NavSection[] = [
  {
    title: "Platform",
    items: [
      {
        title: "Platform Overview",
        description: "The complete edge-to-cloud industrial intelligence stack",
        href: "/platform",
      },
      {
        title: "AI Models & Analytics",
        description: "High-frequency Fast Fourier Transform (FFT) vibration & acoustic models",
        href: "/platform#ai-models",
      },
      {
        title: "Data Connectivity",
        description: "Non-intrusive clip-on sensors, Modbus, OPC-UA, and zero-downtime setup",
        href: "/platform#connectivity",
      },
      {
        title: "Security & Compliance",
        description: "IEC 62443 cyber-compliance, hardware air-gapping, and zero inbound ports",
        href: "/platform#security",
        badge: "Air-Gapped",
      },
    ],
    featured: {
      title: "Edge-Sentinel Gateway v4",
      description: "Hardware-rooted zero-trust bridge connecting OT plant machinery directly to cloud AI models.",
      href: "/platform",
      tag: "Hardware Spec"
    }
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Predictive Maintenance",
        description: "Detect bearing, motor, and compressor degradation 14 days before failure",
        href: "/solutions/predictive-maintenance",
      },
      {
        title: "Real-Time Equipment Monitoring",
        description: "Sub-second machine telemetry, pressure delta, and thermal health",
        href: "/solutions/real-time-monitoring",
      },
      {
        title: "Production Optimization",
        description: "Automated root-cause bottleneck classification and OEE boost",
        href: "/solutions/production-optimization",
      },
      {
        title: "Quality & Anomaly Detection",
        description: "Surface micro-fissure defects and pressure sags before quality yield drops",
        href: "/solutions/quality-anomaly-detection",
      },
      {
        title: "Energy Optimization",
        description: "Shed 18%–22% of continuous compressed air and idle motor utility waste",
        href: "/solutions/energy-optimization",
        badge: "ISO 50001",
      },
    ],
    featured: {
      title: "Compressor Audit Playbook",
      description: "How Tier-1 automotive plants eliminate idle electrical consumption.",
      href: "/resources/case-studies",
      tag: "ROI Study"
    }
  },
  {
    title: "Industries",
    items: [
      {
        title: "Automotive & Tier-1 Powertrain",
        description: "Preventing stamping press stalls and robotic cell pneumatic pressure drops",
        href: "/industries#automotive",
      },
      {
        title: "Semiconductors & Cleanrooms",
        description: "Class-100 environmental control, chiller monitoring, and oil-mist prevention",
        href: "/industries#cleanrooms",
      },
      {
        title: "Precision Metal & Heavy CNC",
        description: "Spindle vibration harmonics, tool wear mitigation, and peak demand shaving",
        href: "/industries#cnc-metal",
      },
      {
        title: "Food, Beverage & Cold Storage",
        description: "IP67 washdown-proof current and pressure sensors with FDA-compliant logging",
        href: "/industries#food-beverage",
      },
    ],
    featured: {
      title: "Cleanroom Reliability",
      description: "Zero outages maintained across 18 continuous months of semiconductor fab.",
      href: "/industries",
      tag: "Case Study"
    }
  },
  {
    title: "Resources",
    items: [
      {
        title: "Case Studies",
        description: "Verified customer ROI, electrical logger benchmarks, and OEE numbers",
        href: "/resources/case-studies",
      },
      {
        title: "Technical Insights & Blog",
        description: "Field playbooks, sensor architectures, and industrial engineering articles",
        href: "/resources/blog",
      },
      {
        title: "Whitepapers & Ebooks",
        description: "Deep research on FFT acoustics, Modbus bridging, and decarbonization",
        href: "/resources/whitepapers",
      },
      {
        title: "Webinars & Workshops",
        description: "Live demonstrations on shop-floor digital twin configuration",
        href: "/resources#webinars",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Cittagent",
        description: "Our heritage since 2018, mission, and Bengaluru R&D Center",
        href: "/company/about",
      },
      {
        title: "Careers",
        description: "Join our industrial IoT hardware and machine learning engineering team",
        href: "/company/careers",
      },
      {
        title: "Partners",
        description: "System integrators, hardware distributors, and engineering consultancies",
        href: "/company/partners",
      },
      {
        title: "Trust Center",
        description: "SOC 2 Type II, IEC 62443 security standards, and SLA guarantees",
        href: "/company/trust",
      },
      {
        title: "Contact Us",
        description: "Corporate headquarters, direct engineering desk, and pilot inquiries",
        href: "/contact",
      },
    ],
  },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { name: "Platform Overview", href: "/platform" },
      { name: "AI Models & Analytics", href: "/platform#ai-models" },
      { name: "Data Connectivity", href: "/platform#connectivity" },
      { name: "Security & Compliance", href: "/platform#security" },
      { name: "Hardware Specifications", href: "/platform#hardware" },
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
      { name: "Real-Time Monitoring", href: "/solutions/real-time-monitoring" },
      { name: "Production Optimization", href: "/solutions/production-optimization" },
      { name: "Quality & Anomaly Detection", href: "/solutions/quality-anomaly-detection" },
      { name: "Energy Optimization", href: "/solutions/energy-optimization" },
    ]
  },
  {
    title: "Industries",
    links: [
      { name: "Automotive & Tier-1", href: "/industries#automotive" },
      { name: "Semiconductors & Cleanrooms", href: "/industries#cleanrooms" },
      { name: "Precision Metal & CNC", href: "/industries#cnc-metal" },
      { name: "Food & Beverage", href: "/industries#food-beverage" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Engineering Blog", href: "/resources/blog" },
      { name: "Technical Whitepapers", href: "/resources/whitepapers" },
      { name: "ROI Calculator", href: "/#calculator" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Cittagent", href: "/company/about" },
      { name: "Careers", href: "/company/careers" },
      { name: "Partners", href: "/company/partners" },
      { name: "Trust Center", href: "/company/trust" },
      { name: "Contact & RFP", href: "/contact" },
      { name: "Book a Demo", href: "/book-a-demo" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Cookie Preferences", href: "/legal/cookies" },
      { name: "Security Statement", href: "/company/trust" },
    ]
  }
];
